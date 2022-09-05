export const defaultTemplateCode = `
import * as Pont from 'pont-engine';
import { CodeGenerator, Interface } from "pont-engine";

export class FileStructures extends Pont.FileStructures {
}

export default class MyGenerator extends CodeGenerator {
}
`;

export const defaultTransformCode = `
import { StandardDataSource } from "pont-engine";

export default function(dataSource: StandardDataSource): StandardDataSource {
  return dataSource;
}
`;

export const defaultFetchMethodCode = `
import fetch from 'node-fetch';

export default function (url: string): string {
  return fetch(url).then(res => res.text())
}
`;
