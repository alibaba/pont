type LoggerType = (...data: any[]) => void;

export class Logger {
  static log: LoggerType = console.log;

  static error: LoggerType = console.error;

  static setLog(log: LoggerType) {
    Logger.log = typeof log === 'function' ? log : () => {};
  }

  static setError(error: LoggerType) {
    Logger.error = typeof error === 'function' ? error : () => {};
  }
}
