import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  counterData: any;
  intervalObject: any;

  constructor() {}

  ngOnInit(): void {}

  counterUpdated(data: any) {
    if (['PAUSE', 'RESUME'].includes(data.operation)) {
      data.limit = this.counterData.limit;
    }
    this.counterData = data;

    switch (data.operation) {
      case 'START':
        this.onStart();
        break;
      case 'PAUSE':
        this.onPause();
        break;
      case 'RESUME':
        this.onResume();
        break;
      default:
        break;
    }
  }

  onStart() {
    this.intervalObject = setInterval(() => {
      this.counterData.limit ? this.counterData.limit-- : 0;
    }, 1000);
  }

  onPause() {
    this.clearIntervalfn();
  }

  onResume() {
    this.clearIntervalfn().onStart();
  }

  clearIntervalfn() {
    clearInterval(this.intervalObject);
    return this;
  }

  counterReset() {
    clearInterval(this.intervalObject);
    this.counterData = undefined;
  }
}
