class Token {
  constructor(
    public type: 'Identifier' | 'PreTemplate' | 'EndTemplate' | 'Comma',
    public value = ''
  ) {}
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
      throw Error(
        'the first node type is not ' +
          type +
          " in template parser's eat method"
      );
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
    };
  }
}

function compileTemplate(template: string) {
  const Identifier = /^[a-zA-Z_][a-zA-Z_0-9]*/;
  const PreTemplate = /^«/;
  const EndTemplate = /^»/;
  const Comma = /^,/;

  // lexer
  let code = template;
  let matchedText = '';
  let nodes = [] as Token[];

  while (code) {
    // 去掉空格
    code = code.trim();

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

  if (templateArgs.length) {
    if (name === 'List') {
      retName = 'Array';
    } else {
      retName = originName ? `defs.${originName}.${name}` : `defs.${name}`;
    }
    return `${retName}<${templateArgs.map(arg => generateCode(arg, originName)).join(', ')}>`;
  }

  return retName;
}

export function generateTemplate(template: string, originName = ''): string {
  if (template.startsWith('#/definitions/')) {
    template = template.slice('#/definitions/'.length);
  }
  if (!template) {
    return '';
  }
  const ast = compileTemplate(template);

  if (!ast) {
    return '';
  }

  return generateCode(ast, originName);
}

// 找到模板表达式里的第一个 template 。都改成 T0
function findTemplate(ast, isFirst = true) {
  const plainName = ['List', 'Map', 'number', 'string', 'boolean', 'long'];
  const { templateArgs, name } = ast;

  if (plainName.indexOf(name) === -1 && !isFirst) {
    return name;
  }

  if (templateArgs && templateArgs.length) {
    let res = null;

    templateArgs.forEach(item => {
      res = findTemplate(item, false);
    });

    return res;
  }

  return false;
}

export function findDefinition(template: string) {
  if (template.startsWith('#/definitions/')) {
    template = template.slice('#/definitions/'.length);
  }
  if (!template) {
    return '';
  }

  const ast = compileTemplate(template);

  if (!ast) {
    return '';
  }

  return findTemplate(ast) || '';
}

export function generateTemplateDef(template: string) {
  if (template.startsWith('#/definitions/')) {
    template = template.slice('#/definitions/'.length);
  }
  if (!template) {
    return '';
  }
  const ast = compileTemplate(template);

  if (!ast) {
    return '';
  }

  const { templateArgs, name } = ast;

  if (templateArgs && templateArgs.length) {
    return `${name}<${templateArgs
      .map((arg, argIndex) => 'T' + argIndex)
      .join(', ')}>`;
  }

  return name;
}
