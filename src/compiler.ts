import { StandardDataType } from './standard';

class Token {
  constructor(public type: 'Identifier' | 'PreTemplate' | 'EndTemplate' | 'Comma', public value = '') {}
}

interface AstNode {
  name: string;
  templateArgs: AstNode[];
}

class Parser {
  constructor(private nodes: Token[]) {}

  eat(type: 'Identifier' | 'PreTemplate' | 'EndTemplate' | 'Comma') {
    if (this.nodes.length && this.nodes[0].type === type) {
      const node = this.nodes[0];
      this.nodes = this.nodes.slice(1);

      return node;
    } else {
      console.error('current nodes', this.nodes);
      throw Error('the first node type is not ' + type + " in template parser's eat method");
    }
  }

  check(type: 'Identifier' | 'PreTemplate' | 'EndTemplate' | 'Comma') {
    if (this.nodes.length && this.nodes[0].type === type) {
      return true;
    }

    return false;
  }

  parserTemplateArgs() {
    const args = [];
    args[0] = this.parseTemplate();

    while (this.check('Comma')) {
      this.eat('Comma');
      args.push(this.parseTemplate());
    }

    return args;
  }

  parseTemplate() {
    const name = this.eat('Identifier').value;
    let templateArgs = [] as any[];

    if (this.check('PreTemplate')) {
      this.eat('PreTemplate');
      templateArgs = this.parserTemplateArgs();
      this.eat('EndTemplate');
    }

    return {
      type: 'Template',
      name,
      templateArgs
    } as AstNode;
  }
}

/** ast 转换为标准类型 */
export function parseAst2StandardDataType(
  ast: AstNode,
  defNames: string[],
  classTemplateArgs: StandardDataType[] = []
): StandardDataType {
  const { name, templateArgs } = ast;
  let typeName = name;

  if (name === 'List') {
    typeName = 'Array';
  }

  if (name === 'long') {
    typeName = 'number';
  }

  if (['void', 'Void'].includes(name)) {
    typeName = 'void';
  }

  if (['object', 'Object', 'Map'].includes(name)) {
    typeName = 'object';
  }

  const isDefsType = defNames.includes(name);
  const typeArgs = templateArgs.map(arg => {
    return parseAst2StandardDataType(arg, defNames, classTemplateArgs);
  });

  const dataType = new StandardDataType(typeArgs, typeName, isDefsType);
  dataType.setTemplateIndex(classTemplateArgs);

  return dataType;
}

export function compileTemplate(template: string) {
  if (template.startsWith('#/definitions/')) {
    template = template.slice('#/definitions/'.length);
  }
  if (!template) {
    return null;
  }

  const Identifier = /^[a-zA-Z_][a-zA-Z_0-9]*/;
  const PreTemplate = /^«/;
  const EndTemplate = /^»/;
  const Comma = /^,/;

  // lexer
  let code = template;
  let matchedText = '';
  let nodes = [] as Token[];

  while (code) {
    // 去掉空格,包括两端及中间的空格
    code = code.replace(/\s/g, '');

    if (code.match(Identifier)) {
      matchedText = code.match(Identifier)[0];

      nodes.push(new Token('Identifier', matchedText));
    } else if (code.match(PreTemplate)) {
      matchedText = code.match(PreTemplate)[0];

      nodes.push(new Token('PreTemplate', matchedText));
    } else if (code.match(EndTemplate)) {
      matchedText = code.match(EndTemplate)[0];

      nodes.push(new Token('EndTemplate', matchedText));
    } else if (code.match(Comma)) {
      matchedText = code.match(Comma)[0];

      nodes.push(new Token('Comma', matchedText));
    } else {
      return null;
    }

    code = code.slice(matchedText.length);
  }

  return new Parser(nodes).parseTemplate();
}

function generateCode(ast: any, originName = ''): string {
  const { name, type, templateArgs } = ast;
  let retName = name;

  if (name === 'long') {
    retName = 'number';
  }

  if (['void', 'Void'].includes(name)) {
    retName = 'void';
  }

  if (['object', 'Object'].includes(name)) {
    retName = 'object';
  }

  if (['List'].includes(name)) {
    retName = 'Array';
  }

  // 优先处理有模板参数的情况 如 Map<Foo,Bar> , List<Foo, Bar> , Foo<Bar, Baz>
  if (templateArgs.length) {
    if (name === 'List') {
      retName = 'Array';
    } else if (['Map'].includes(name)) {
      retName = name;
    } else {
      retName = originName ? `defs.${originName}.${name}` : `defs.${name}`;
    }
    return `${retName}<${templateArgs.map(arg => generateCode(arg, originName)).join(', ')}>`;
  }

  if (['number', 'string', 'boolean', 'void', 'object'].includes(retName)) {
    return retName;
  }
  // 无模板参数的 Map 转换为 object
  if (['Map'].includes(name)) {
    retName = 'object';
    return retName;
  }

  return originName ? `defs.${originName}.${name}` : `defs.${name}`;
}
