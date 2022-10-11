type LoggerType = (...data: any[]) => void;

export class Logger {
  static log: LoggerType = console.log;

  static setLog(logger: LoggerType) {
    Logger.log = typeof logger === 'function' ? logger : () => {};
  }
}
