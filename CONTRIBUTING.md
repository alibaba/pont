# CONTRIBUTING

### GET START

```sh
git clone git@github.com:alibaba/pont.git

cd pont

yarn (跑 yarn 能够自动 link 关联 packages)

npm run watch
```

在 vscode 中，可以选择 debug:vscode-pont test:vscode-pont debug:pont-engine test:pont-engine 等调试 pont-engine 或 vscode 插件。

### pont 标准数据结构

#### BaseClass

- name: string; 类名

- description: string; 描述

- properties: Property[]; 属性

- templateArgs: StandardDataType[]; 泛型

#### Property

- dataType: StandardDataType;

- description?: string;

- name: string;

- required: boolean;

- in: 'query' | 'body' | 'path';

##### StandardDataType

- typeArgs = [] as StandardDataType[];

- typeName = ''; 类型名，例如 number、自定义类名、Array、Object、'1' | '2' | 'a' 等

- isDefsType = false;

- templateIndex = -1; 指向类的第几个模板，-1 表示没有

#### 例子

```
class A<T> {
  a: T;
}

class B {
  b = A<number>
}
```

pont 格式：

```
{
  "name": "A",
  "properties": [{
    "name": "a",
    "required": false,
    "dataType": {
      templateIndex: 0,
      typeName: "T"
    }
  }],
  "templateArgs": [{ "typeName": "T" }],
}

{
  "name": "B",
  "properties": [{
    "name": "b",
    "required": false,
    "dataType": {
      templateIndex: -1,
      typeName: "A",
      typeArgs: [{ typeName: "number" }]
    }
  }],
  "templateArgs": [],
}
```
