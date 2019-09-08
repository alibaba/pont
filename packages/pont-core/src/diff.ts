import { Mod, Interface, BaseClass } from './standard';
import * as _ from 'lodash';

export interface Model extends Mod {
  name: string;
  details?: string[];
}
export interface Model extends BaseClass {
  name: string;
  details?: string[];
}

interface Entity {
  name: string;
  [x: string]: any;
}

function analyWithName(preEntities: Entity[], nextEntities: Entity[]) {
  return {
    newEntities: _.differenceBy(nextEntities, preEntities, 'name'),
    deletedEntities: _.differenceBy(preEntities, nextEntities, 'name'),
    modifiedEntities: _.intersectionBy(preEntities, nextEntities, 'name')
  };
}

function deepDifInterface(preInter: Interface, nextInter: Interface, preLabel: string): string[] {
  const { parameters, description, method } = preInter;
  const details = [] as string[];

  if (description !== nextInter.description) {
    details.push(`${preLabel}的描述信息更新`);
  }

  if (method !== nextInter.method) {
    details.push(`${preLabel}的METHOD更新`);
  }

  const { newEntities: newParams, deletedEntities: deletedParams, modifiedEntities: updateParams } = analyWithName(
    parameters,
    nextInter.parameters
  );

  const newMsgs = newParams.map(param => param.name).map(name => `${preLabel}新增参数 ${name}`);
  const delMsgs = deletedParams.map(param => param.name).map(name => `${preLabel}删除参数 ${name}`);
  const updateMsgs = [] as string[];

  updateParams.forEach(tParam => {
    const preParam = _.find(parameters, param => param.name === tParam.name);
    const nextParam = _.find(nextInter.parameters, param => param.name === tParam.name);

    if (!_.isEqual(preParam, nextParam)) {
      updateMsgs.push(`${preLabel}的参数 ${tParam.name} 信息有更新`);
    }
  });

  if (!_.isEqual(preInter.response, nextInter.response)) {
    updateMsgs.push(`${preLabel} 的返回类型有更新！`);
  }

  return [...details, ...updateMsgs, ...delMsgs, ...newMsgs];
}

function deepDifMod(preMod: Mod, nextMod: Mod): string[] {
  const { interfaces, name, description } = preMod;
  const { interfaces: nextInterfaces, name: nextName, ...next } = nextMod;
  const label = `${name} 模块`;
  const details = [] as string[];

  if (description !== next.description) {
    details.push(`${label} 的描述信息更新`);
  }

  const { newEntities: newInters, deletedEntities: delInters, modifiedEntities: updateInters } = analyWithName(
    interfaces,
    nextInterfaces
  );
  const newMsgs = newInters.map(inter => inter.name).map(name => `${label} 新增接口 ${name}`);
  const delMsgs = delInters.map(inter => inter.name).map(name => `${label} 删除接口 ${name}`);
  const updateMsgs = [] as string[];

  updateInters.map(tInter => {
    const preInter = _.find(interfaces, inter => inter.name === tInter.name);
    const nextInter = _.find(nextInterfaces, inter => inter.name === tInter.name);

    const msgs = deepDifInterface(preInter, nextInter, `${label}的 ${tInter.name} 接口`);
    updateMsgs.push(...msgs);
  });

  return [...details, ...updateMsgs, ...delMsgs, ...newMsgs];
}

function deepDifBo(preBo: BaseClass, nextBo: BaseClass): string[] {
  const { description, name, properties } = preBo;
  const details = [] as string[];
  const label = `基类 ${preBo.name}`;

  if (description !== nextBo.description) {
    details.push(`${label}的描述信息更新`);
  }

  const { newEntities: newProps, modifiedEntities: updateProps, deletedEntities: delProps } = analyWithName(
    properties,
    nextBo.properties
  );

  const delMsgs = delProps.map(prop => prop.name).map(name => `${label} 删除属性 ${name}`);
  const newMsgs = newProps.map(prop => prop.name).map(name => `${label} 新增属性 ${name}`);

  updateProps.forEach(tProp => {
    const preProps = _.find(properties, prop => prop.name === tProp.name);
    const nextProps = _.find(nextBo.properties, prop => prop.name === tProp.name);

    if (!_.isEqual(preProps, nextProps)) {
      details.push(`${label}的属性 ${name} 已更新`);
    }
  });

  return [...details, ...delMsgs, ...newMsgs];
}

export function removeCtx(data) {
  if (Array.isArray(data)) {
    return data.map(item => {
      const { context, ...rest } = item;
      Object.keys(rest).forEach(key => {
        rest[key] = removeCtx(rest[key]);
      });

      return rest;
    });
  } else if (typeof data === 'object') {
    const { context, ...rest } = data;

    Object.keys(rest).forEach(key => {
      rest[key] = removeCtx(rest[key]);
    });

    return rest;
  }
  return data;
}

export function diff(preModels: Model[], nextModels: Model[], isMod = true): Model[] {
  preModels = removeCtx(preModels);
  nextModels = removeCtx(nextModels);

  const { deletedEntities, modifiedEntities, newEntities } = analyWithName(preModels, nextModels);

  let label = '基类';
  if (isMod) {
    label = '模块';
  }

  const delModels = deletedEntities.map(model => ({
    ...model,
    details: [`${label} ${model.name} 已删除`]
  }));
  const newModels = newEntities.map(model => ({
    ...model,
    details: [`${label} ${model.name} 已新增`]
  }));

  const updateModels = [];

  modifiedEntities.forEach(tEntity => {
    const preEntity = _.find(preModels, model => model.name === tEntity.name);
    const nextEntity = _.find(nextModels, model => model.name === tEntity.name);

    if (isMod) {
      const msgs = deepDifMod(preEntity as Mod, nextEntity as Mod);

      if (msgs.length) {
        updateModels.push({
          ...nextEntity,
          details: msgs
        } as Model);
      }
    } else {
      const msgs = deepDifBo(preEntity as BaseClass, nextEntity as BaseClass);

      if (msgs.length) {
        updateModels.push({
          ...nextEntity,
          details: msgs
        } as Model);
      }
    }
  });

  return [...updateModels, ...delModels, ...newModels];
}
