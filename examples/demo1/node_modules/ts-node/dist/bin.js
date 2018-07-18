#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var path_1 = require("path");
var v8flags = require("v8flags");
var argv = process.argv.slice(2);
v8flags(function (err, v8flags) {
    if (err) {
        console.error(err.stack);
        process.exit(1);
        return;
    }
    var nodeArgs = [];
    var scriptArgs = [];
    var knownFlags = v8flags.concat([
        'debug',
        '--debug',
        '--debug-brk',
        '--inspect',
        '--inspect-brk',
        '--nolazy',
        '--no-deprecation',
        '--log-timer-events',
        '--throw-deprecation',
        '--trace-deprecation',
        '--allow-natives-syntax',
        '--perf-basic-prof',
        '--preserve-symlinks'
    ]);
    for (var i = 0; i < argv.length; i++) {
        var arg = argv[i];
        var flag = arg.split('=', 1)[0];
        if (flag === '-d') {
            nodeArgs.push('--debug');
        }
        else if (flag === '-gc') {
            nodeArgs.push('--expose-gc');
        }
        else if (knownFlags.indexOf(flag) > -1) {
            nodeArgs.push(arg);
        }
        else if (/^-/.test(flag)) {
            scriptArgs.push(arg);
        }
        else {
            scriptArgs.push.apply(scriptArgs, argv.slice(i));
            break;
        }
    }
    var proc = child_process_1.spawn(process.execPath, nodeArgs.concat(path_1.join(__dirname, '_bin.js'), scriptArgs), { stdio: 'inherit' });
    proc.on('exit', function (code, signal) {
        process.on('exit', function () {
            if (signal) {
                process.kill(process.pid, signal);
            }
            else {
                process.exit(code);
            }
        });
    });
});
//# sourceMappingURL=bin.js.map