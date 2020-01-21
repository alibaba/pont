import { StandardDataSource, Interface, Mod, Property, StandardDataType } from '../standard';
import { OriginBaseReader } from './base';

// 支持的格式
const SupportedRapV2PropertyTypes = ['String', 'Number', 'Boolean', 'Object', 'Array'] as const;
type SupportedRapV2PropertyTypes = typeof SupportedRapV2PropertyTypes[number];
interface RapV2Property {
  id: number;
  scope: string;
  type: SupportedRapV2PropertyTypes;
  name: string;
  rule: string;
  default: string;
  description: string;
  creator: string;
  interface: Interface;
  module: string;
  repository: string;
  children: RapV2Property[];
  parent: RapV2Property;
  required: boolean;
  createdAt: string;
  updatedAt: string;
  parentId: number;
}

type RapV2DataSource = any;
type RapV2Mod = any;
type RapV2Interface = any;

// 一维数组生成树
function formatRapV2PropertiesToTree(rapV2Properties: RapV2Property[]) {
  let parents = rapV2Properties.filter(value => value.parentId === -1);
  let children = rapV2Properties.filter(value => value.parentId !== -1);
  let translator = (parents, children) => {
    parents.forEach(parent => {
      children.forEach((current, index) => {
        //  找到父节点对应的子节点
        if (current.parentId === parent.id) {
          // 对子节点数据进行深复制，这里只支持部分类型的数据深复制
          let temp = JSON.parse(JSON.stringify(children));
          //  从temp中移除当前节点，减少递归
          temp.splice(index, 1);
          //  让当前子节点作为唯一的父节点，去递归查找其对应的子节点
          translator([current], temp);
          //  把找到子节点放入父节点的children属性中
          if (typeof parent.children !== 'undefined') {
            parent.children.push(current);
          } else {
            parent.children = [current];
          }
        }
      });
    });
  };
  translator(parents, children);
  return parents;
}

// TODO: 待更换，临时转换中文里的特殊字符，让中文可用
function normalizeName(text) {
  return text.replace(/(\/|\ |-|\||\.|【|】|（|）|\(|\)|\[|\]|，)/g, '_');
}

function createObjectDataTypeByPontProperties(properties: Property[]) {
  const contentType = new StandardDataType();
  contentType.typePropertie(s = properties;
  return contentType;
}

function getRapV2PropertyDataType(rapV2Property: RapV2Property): StandardDataType {
  const rapV2PropertyType = rapV2Property.type;

  if (rapV2PropertyType === 'Array') {
    // Enum类型 Array<string|number>
    if (!rapV2Property.children) {
      // TODO: ？？？根据rapV2Property的初始值给定类型
      // 缺省值为string
      return new StandardDataType([new StandardDataType([], 'string')], 'Array');
    }
    // Collection类型 Array<T>
    if (rapV2Property.children) {
      const contentType = createObjectDataTypeByPontProperties(
        // 格式化成 PontProperty
        rapV2Property.children.map(mapRapV2Property2PontProperty)
      );
      return new StandardDataType([contentType], 'Array');
    }
  }

  if (rapV2PropertyType === 'Object') {
    // 这种情况基本不可能出现
    // if (!rapV2Property.children) {}
    return createObjectDataTypeByPontProperties(
      // 格式化成 PontProperty
      rapV2Property.children.map(mapRapV2Property2PontProperty)
    );
  }

  return new StandardDataType([], rapV2PropertyType.toLowerCase(), false);
}

function mapRapV2Property2PontProperty(rapV2Property: RapV2Property) {
  const dataType = getRapV2PropertyDataType(rapV2Property);
  return new Property({
    // Rap里无此属性定义，暂定缺省值
    in: 'query',
    description: rapV2Property.description,
    name: rapV2Property.name,
    required: false,
    dataType
  });
}

function mapRapV2Interfaces2PontInterface(rapV2Interface: RapV2Interface) {
  const rapV2TreeProps = formatRapV2PropertiesToTree(
    rapV2Interface.properties.map(prop => ({
      ...prop,
      // 响应参数里，不支持的类型默认为string
      type: SupportedRapV2PropertyTypes.includes(prop.type) ? prop.type : 'String'
    }))
  );

  const responseDataType = createObjectDataTypeByPontProperties(
    rapV2TreeProps.filter(prop => prop.scope === 'response').map(mapRapV2Property2PontProperty)
  );
  const requestDataType = rapV2TreeProps.filter(prop => prop.scope === 'request').map(mapRapV2Property2PontProperty);

  return new Interface({
    // RAP无此属性定义，缺省值设置为'application/json'
    consumes: ['application/json'],
    description: rapV2Interface.description,
    // TIPS: StandardDataType.generateCode用于生成Typescript
    response: responseDataType,
    method: rapV2Interface.method,
    name: normalizeName(rapV2Interface.name),
    path: rapV2Interface.url,
    parameters: requestDataType
  });
}

function mapRapV2Mod2PontMod(rapV2Mod: RapV2Mod) {
  return new Mod({
    description: rapV2Mod.description,
    interfaces: rapV2Mod.interfaces.map(mapRapV2Interfaces2PontInterface),
    name: normalizeName(rapV2Mod.name)
  });
}

export class RapV2Reader extends OriginBaseReader {
  transform2Standard(rapV2DataSource: RapV2DataSource) {
    return new StandardDataSource({
      // 暂无基础类
      baseClasses: [],
      mods: rapV2DataSource.data.modules.map(mapRapV2Mod2PontMod),
      name: normalizeName(rapV2DataSource.data.name)
    });
  }
}
