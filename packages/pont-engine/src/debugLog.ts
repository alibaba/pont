const chalk = require('chalk');
const log = console.log;

export function bindInfo(onLog) {
  return (message: string) => {
    onLog && onLog(message);
    info(message);
  };
}

export function info(info: string) {
  log(chalk.bold.blue(info));
}

export function error(info: string) {
  log(chalk.bold.red(info));
}

export function warn(info: string) {
  log(chalk.bold.yellow(info));
}
