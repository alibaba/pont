import { StandardDataType } from './standard';
import { PrimitiveTypeMap } from './primitiveTypeMap';

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

  // 语法分析
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
  // 怪异类型兼容
  let typeName = PrimitiveTypeMap[name] || name;

  const isDefsType = defNames.includes(name);
  const typeArgs = templateArgs.map(arg => {
    return parseAst2StandardDataType(arg, defNames, classTemplateArgs);
  });

  const dataType = new StandardDataType(typeArgs, typeName, isDefsType);
  dataType.setTemplateIndex(classTemplateArgs);

  return dataType;
}

// swagger v2 中 definitions 在 OpenAPI 3 中标准化为了 components，为复用该函数，抽取出 keyword 参数
export function compileTemplate(template: string, keyword = '#/definitions/') {
  // 词法分析
  if (template.startsWith(keyword)) {
    template = template.slice(keyword.length);
  }
  if (!template) {
    return null;
  }

  const Identifier = /^[a-zA-Z_][a-zA-Z_0-9-]*/;
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
    // 替换.为_
    code = code.replace(/\./g, '_');

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
