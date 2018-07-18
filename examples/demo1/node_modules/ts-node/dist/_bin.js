"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var repl_1 = require("repl");
var util_1 = require("util");
var arrify = require("arrify");
var Module = require("module");
var minimist = require("minimist");
var chalk = require("chalk");
var diff_1 = require("diff");
var vm_1 = require("vm");
var index_1 = require("./index");
var strings = ['eval', 'print', 'compiler', 'project', 'ignoreWarnings', 'require', 'cacheDirectory', 'ignore'];
var booleans = ['help', 'fast', 'version', 'disableWarnings', 'cache'];
var aliases = {
    help: ['h'],
    fast: ['F'],
    version: ['v'],
    eval: ['e'],
    print: ['p'],
    project: ['P'],
    compiler: ['C'],
    require: ['r'],
    cacheDirectory: ['cache-directory'],
    ignoreWarnings: ['I', 'ignore-warnings'],
    disableWarnings: ['D', 'disable-warnings'],
    compilerOptions: ['O', 'compiler-options']
};
var stop = process.argv.length;
function isFlagOnly(arg) {
    var name = arg.replace(/^--?/, '');
    if (/=/.test(name) || /^--no-/.test(arg)) {
        return true;
    }
    for (var _i = 0, booleans_1 = booleans; _i < booleans_1.length; _i++) {
        var bool = booleans_1[_i];
        if (name === bool) {
            return true;
        }
        var alias = aliases[bool];
        if (alias) {
            for (var _a = 0, alias_1 = alias; _a < alias_1.length; _a++) {
                var other = alias_1[_a];
                if (other === name) {
                    return true;
                }
            }
        }
    }
    return false;
}
for (var i = 2; i < process.argv.length; i++) {
    var arg = process.argv[i];
    var next = process.argv[i + 1];
    if (/^\[/.test(arg) || /\]$/.test(arg)) {
        continue;
    }
    if (/^-/.test(arg)) {
        if (!isFlagOnly(arg) && !/^-/.test(next)) {
            i++;
        }
        continue;
    }
    stop = i;
    break;
}
var argv = minimist(process.argv.slice(2, stop), {
    string: strings,
    boolean: booleans,
    alias: aliases,
    default: {
        cache: null,
        fast: null,
        disableWarnings: null
    }
});
if (argv.help) {
    console.log("\nUsage: ts-node [options] [ -e script | script.ts ] [arguments]\n\nOptions:\n\n  -e, --eval [code]              Evaluate code\n  -p, --print [code]             Evaluate code and print result\n  -r, --require [path]           Require a node module for execution\n  -C, --compiler [name]          Specify a custom TypeScript compiler\n  -I, --ignoreWarnings [code]    Ignore TypeScript warnings by diagnostic code\n  -D, --disableWarnings          Ignore every TypeScript warning\n  -P, --project [path]           Path to TypeScript project (or `false`)\n  -O, --compilerOptions [opts]   JSON object to merge with compiler options\n  -F, --fast                     Run TypeScript compilation in transpile mode\n  --ignore [regexp], --no-ignore Set the ignore check (default: `/node_modules/`)\n  --no-cache                     Disable the TypeScript cache\n  --cache-directory              Configure the TypeScript cache directory\n");
    process.exit(0);
}
var cwd = process.cwd();
var code = argv.eval == null ? argv.print : argv.eval;
var isEvalScript = typeof argv.eval === 'string' || !!argv.print;
var isEval = isEvalScript || stop === process.argv.length;
var isPrinted = argv.print != null;
var service = index_1.register({
    fast: argv.fast,
    cache: argv.cache,
    cacheDirectory: argv.cacheDirectory,
    compiler: argv.compiler,
    project: argv.project,
    ignore: argv.ignore,
    ignoreWarnings: argv.ignoreWarnings,
    disableWarnings: argv.disableWarnings,
    compilerOptions: index_1.parse(argv.compilerOptions),
    getFile: isEval ? getFileEval : index_1.getFile,
    fileExists: isEval ? fileExistsEval : index_1.fileExists
});
if (argv.version) {
    console.log("ts-node v" + index_1.VERSION);
    console.log("node " + process.version);
    console.log("typescript v" + service.ts.version);
    console.log("cache " + JSON.stringify(service.cachedir));
    process.exit(0);
}
Module._preloadModules(arrify(argv.require));
var EVAL_FILENAME = "[eval].ts";
var EVAL_PATH = path_1.join(cwd, EVAL_FILENAME);
var EVAL_INSTANCE = { input: '', output: '', version: 0, lines: 0 };
if (isEvalScript) {
    evalAndExit(code, isPrinted);
}
else {
    if (stop < process.argv.length) {
        var args = process.argv.slice(stop);
        args[0] = path_1.resolve(cwd, args[0]);
        process.argv = ['node'].concat(args);
        process.execArgv.unshift(__filename);
        Module.runMain();
    }
    else {
        if (process.stdin.isTTY) {
            startRepl();
        }
        else {
            var code_1 = '';
            process.stdin.on('data', function (chunk) { return code_1 += chunk; });
            process.stdin.on('end', function () { return evalAndExit(code_1, isPrinted); });
        }
    }
}
function evalAndExit(code, isPrinted) {
    var module = new Module(EVAL_FILENAME);
    module.filename = EVAL_FILENAME;
    module.paths = Module._nodeModulePaths(cwd);
    global.__filename = EVAL_FILENAME;
    global.__dirname = cwd;
    global.exports = module.exports;
    global.module = module;
    global.require = module.require.bind(module);
    var result;
    try {
        result = _eval(code, global);
    }
    catch (error) {
        if (error instanceof index_1.TSError) {
            console.error(index_1.printError(error));
            process.exit(1);
        }
        throw error;
    }
    if (isPrinted) {
        console.log(typeof result === 'string' ? result : util_1.inspect(result));
    }
    process.exit(0);
}
function _eval(input, context) {
    var lines = EVAL_INSTANCE.lines;
    var isCompletion = !/\n$/.test(input);
    var undo = appendEval(input);
    var output;
    try {
        output = service.compile(EVAL_INSTANCE.input, EVAL_PATH, -lines);
    }
    catch (err) {
        undo();
        throw err;
    }
    var changes = diff_1.diffLines(EVAL_INSTANCE.output, output);
    if (isCompletion) {
        undo();
    }
    else {
        EVAL_INSTANCE.output = output;
    }
    var result;
    for (var _i = 0, changes_1 = changes; _i < changes_1.length; _i++) {
        var change = changes_1[_i];
        if (change.added) {
            var script = new vm_1.Script(change.value, EVAL_FILENAME);
            result = script.runInNewContext(context);
        }
    }
    return result;
}
function startRepl() {
    var repl = repl_1.start({
        prompt: '> ',
        input: process.stdin,
        output: process.stdout,
        eval: replEval,
        useGlobal: false
    });
    appendEval('exports = module.exports\n');
    var reset = appendEval('');
    repl.on('reset', reset);
    repl.defineCommand('type', {
        help: 'Check the type of a TypeScript identifier',
        action: function (identifier) {
            if (!identifier) {
                repl.displayPrompt();
                return;
            }
            var undo = appendEval(identifier);
            var _a = service.getTypeInfo(EVAL_INSTANCE.input, EVAL_PATH, EVAL_INSTANCE.input.length), name = _a.name, comment = _a.comment;
            undo();
            repl.outputStream.write(chalk.bold(name) + "\n" + (comment ? comment + "\n" : ''));
            repl.displayPrompt();
        }
    });
}
function replEval(code, context, _filename, callback) {
    var err;
    var result;
    if (code === '.scope') {
        callback();
        return;
    }
    try {
        result = _eval(code, context);
    }
    catch (error) {
        if (error instanceof index_1.TSError) {
            if (typeof repl_1.Recoverable === 'function' && isRecoverable(error)) {
                err = new repl_1.Recoverable(error);
            }
            else {
                err = index_1.printError(error);
            }
        }
        else {
            err = error;
        }
    }
    callback(err, result);
}
function appendEval(input) {
    var undoInput = EVAL_INSTANCE.input;
    var undoVersion = EVAL_INSTANCE.version;
    var undoOutput = EVAL_INSTANCE.output;
    var undoLines = EVAL_INSTANCE.lines;
    if (undoInput.charAt(undoInput.length - 1) === '\n' && /^\s*[\[\(\`]/.test(input) && !/;\s*$/.test(undoInput)) {
        EVAL_INSTANCE.input = EVAL_INSTANCE.input.slice(0, -1) + ";\n";
    }
    EVAL_INSTANCE.input += input;
    EVAL_INSTANCE.lines += lineCount(input);
    EVAL_INSTANCE.version++;
    return function () {
        EVAL_INSTANCE.input = undoInput;
        EVAL_INSTANCE.output = undoOutput;
        EVAL_INSTANCE.version = undoVersion;
        EVAL_INSTANCE.lines = undoLines;
    };
}
function lineCount(value) {
    var count = 0;
    for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
        var char = value_1[_i];
        if (char === '\n') {
            count++;
        }
    }
    return count;
}
function getFileEval(path) {
    return path === EVAL_PATH ? EVAL_INSTANCE.input : index_1.getFile(path);
}
function fileExistsEval(path) {
    return path === EVAL_PATH || index_1.fileExists(path);
}
var RECOVERY_CODES = [
    1003,
    1005,
    1109,
    1126,
    1160,
    1161
];
function isRecoverable(error) {
    return error.diagnostics.every(function (x) { return RECOVERY_CODES.indexOf(x.code) > -1; });
}
//# sourceMappingURL=_bin.js.map