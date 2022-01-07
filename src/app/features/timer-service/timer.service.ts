import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  dataObject: any;
  interval: any;
  clickCount = {
    start: 0,
    resume: 0,
    pause: 0,
  };
  loggerDetails: Array<any> = [];

  public counterDetails$: ReplaySubject<any> = new ReplaySubject<any>(1);
  public clickDetails$: ReplaySubject<any> = new ReplaySubject<any>(1);
  public loggerDetails$: ReplaySubject<any> = new ReplaySubject<any>(1);

  constructor() {
    this.counterDetails$.next(null);
    this.clickDetails$.next(this.clickCount);
    this.loggerDetails$.next(this.loggerDetails);
  }

  setData(val: any) {
    if (['PAUSE', 'RESUME'].includes(val.operation)) {
      val.limit = this.dataObject.limit;
    }
    this.dataObject = val;
    this.loggerDetails.push({ ...val, time: new Date() });

    switch (val.operation) {
      case 'START':
        this.clickCount.start++;
        this.clickDetails$.next(this.clickCount);
        this.onStart();
        break;
      case 'PAUSE':
        this.clickCount.pause++;
        this.clickDetails$.next(this.clickCount);
        this.onPause();
        break;
      case 'RESUME':
        this.clickCount.resume++;
        this.clickDetails$.next(this.clickCount);
        this.onResume();
        break;
      default:
        this.reset();
        this.loggerDetails = [];
        break;
    }

    this.loggerDetails$.next(this.loggerDetails);
  }

  reset() {
    clearInterval(this.interval);
    this.dataObject = null;

    this.counterDetails$.next(null);

    this.clickCount.start = 0;
    this.clickCount.resume = 0;
    this.clickCount.pause = 0;
    this.clickDetails$.next(this.clickCount);

    this.loggerDetails = [];
    this.loggerDetails$.next(this.loggerDetails);
  }

  onStart() {
    if (this.dataObject && this.dataObject.limit >= 0) {
      this.interval = setInterval(() => {
        this.counterDetails$.next(this.dataObject.limit);
        if (this.dataObject.limit) this.dataObject.limit--;

        if (this.dataObject.limit == 0) {
          this.counterDetails$.next(0);
        }
      }, 1000);
    }
  }

  onPause() {
    clearInterval(this.interval);
  }

  onResume() {
    this.onStart();
  }
}
