import { Logger } from '../main/Logger';

export class PollingManage {
  private pollingId = null;

  private callback: Function;

  setCallback(callback: Function) {
    this.callback = callback;
  }

  private async polling(pollingTime: number) {
    if (this.pollingId) {
      Logger.log('[PollingManage] polling');
      await this.callback();
    }

    this.pollingId = setTimeout(() => {
      this.polling(pollingTime);
    }, pollingTime * 1000);
  }

  startPolling(pollingTime: number) {
    this.stopPolling();

    if (!pollingTime) return;

    Logger.log('[PollingManage] startPolling');
    this.polling(pollingTime);
  }

  stopPolling() {
    if (this.pollingId) {
      Logger.log('[PollingManage] stopPolling');
      clearTimeout(this.pollingId);
      this.pollingId = null;
    }
  }
}
