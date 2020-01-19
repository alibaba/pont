import { StandardDataSource, Interface, Mod, Property, StandardDataType } from '../standard';
import { OriginBaseReader } from './base';
import * as _ from 'lodash';

// 支持的格式
const SupportedRapV2PropertyTypes = ['String', 'Number', 'Boolean', 'Object', 'Array'] as const;

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
type SupportedRapV2PropertyTypes = typeof SupportedRapV2PropertyTypes[number];

// 一维数组生成树
function formatRapV2PropertiesToTree(rapV2Properties: RapV2Property[]) {
  //  将没有父节点的元素分离
  let parents = rapV2Properties.filter(value => value.parentId === -1);
  let children = rapV2Properties.filter(value => value.parentId !== -1);
  //  定义遍历的方法
  let translator = (parents, children) => {
    //  遍历父节点的数组
    parents.forEach(parent => {
      //  遍历子节点的数组
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
          typeof parent.children !== 'undefined' ? parent.children.push(current) : (parent.children = [current]);
        }
      });
    });
  };
  //  调用转换方法
  translator(parents, children);
  return parents;
}

// TODO: 待更换，临时转换中文里的特殊字符，让中文可用
function normalizeName(text) {
  return text.replace(/(\/|\ |-|\||\.|【|】)/g, '_');
}

function transformRapV2ParameterToStandard(rapV2Property: RapV2Property) {
  const rapV2PropertyType = rapV2Property.type;

  // TODO: object/array的处理
  // if (rapV2PropertyType === 'array') {
  //   contentType = new StandardDataType([new StandardDataType()], 'Array', false, -1);
  // }

  return new Property({
    // Rap里无此属性定义，暂定缺省值
    in: 'query',
    description: rapV2Property.description,
    name: rapV2Property.name,
    required: false,
    dataType: new StandardDataType([], rapV2PropertyType.toLowerCase(), false)
  });
}

function parseRapV2Properties(rapV2Properties: RapV2Property[]) {
  let target: any = {};
  const objectMap = _.keyBy(rapV2Properties, 'name');
  _.forEach(objectMap, (prop, key) => {
    const propType = prop.type;
    switch (propType) {
      case 'String':
        target[key] = '';
        break;
      case 'Boolean':
        target[key] = false;
        break;
      case 'Number':
        target[key] = 0;
        break;
      case 'Array':
        // Array<number|string> 类型
        if (!prop.children) {
          target[key] = [];
        }
        // Collection类型
        if (prop.children) {
          target[key] = [];
          parseRapV2Properties(prop.children);
          // target[key] = [];
          // TODO: contentType
          // return new StandardDataType([], 'Array');
        }
        break;
      case 'Object':
        const objectMap = _.keyBy(prop.children, 'name');
        break;

      default:
        break;
    }
  });
}

function transformRapV2InterfacesToStandard(rapV2Interface: RapV2Interface) {
  const requestProperties = rapV2Interface.properties.filter(prop => prop.scope === 'request');
  const responseProperties = rapV2Interface.properties
    .filter(prop => prop.scope === 'response')
    .map(prop => ({
      ...prop,
      // 响应参数里，不支持的类型默认为string
      type: SupportedRapV2PropertyTypes.includes(prop.type) ? prop.type : 'String'
    }));

  return new Interface({
    // RAP无此属性定义，缺省值设置为'application/json'
    consumes: ['application/json'],
    description: rapV2Interface.description,
    // TIPS: StandardDataType.generateCode用于生成Typescript
    // TODO
    response: new StandardDataType([], 'string'),
    method: rapV2Interface.method,
    name: normalizeName(rapV2Interface.name),
    path: rapV2Interface.url,
    parameters: requestProperties.map(transformRapV2ParameterToStandard)
  });
}

function transformRapV2ModToStandard(rapV2Mod: RapV2Mod) {
  return new Mod({
    description: rapV2Mod.description,
    interfaces: rapV2Mod.interfaces.map(transformRapV2InterfacesToStandard),
    name: normalizeName(rapV2Mod.name)
  });
}

function transformRapV2DataToStandard(rapV2DataSource: RapV2DataSource) {
  return new StandardDataSource({
    // 暂无基础类
    baseClasses: [],
    mods: rapV2DataSource.data.modules.map(transformRapV2ModToStandard),
    name: normalizeName(rapV2DataSource.data.name)
  });
}

export class RapV2Reader extends OriginBaseReader {
  transform2Standard(data) {
    return transformRapV2DataToStandard(data);
  }
}
