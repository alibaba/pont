export type Constructor<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any
  ? new (...args: P) => InstanceType<T>
  : never;

  export * from './dataSource';
  export * from './generate';
  export * from './mocks';
  export * from './pontConfig';