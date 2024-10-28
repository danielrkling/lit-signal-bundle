import { WatchDirective} from '@lit-labs/signals';

export class SignalHost {
    private isPendingUpdate = false;
    private __pendingWatches = new Set();
    _updateWatchDirective(d: WatchDirective<unknown>): void {
      this.__pendingWatches.add(d);
      this.requestUpdate();
    }  
    _clearWatchDirective(d: WatchDirective<unknown>): void {
      this.__pendingWatches.delete(d);
    }
    
    requestUpdate() {
      if (this.isPendingUpdate) {
        return;
      }
      this.isPendingUpdate = true;
      queueMicrotask(() => {
        try {
          this.__pendingWatches.forEach((d: any) => d.commit());
        } catch(e) {
        } finally {
          this.__pendingWatches.clear();
        }
        this.isPendingUpdate = false;
      });
    }
    
  };