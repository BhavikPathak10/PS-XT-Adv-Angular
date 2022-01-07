import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-click-logger',
  templateUrl: './countdown-click-logger.component.html',
  styleUrls: ['./countdown-click-logger.component.scss'],
})
export class CountdownClickLoggerComponent implements OnInit {
  objData: { start: number; pause: number; resume: number } = {
    start: 0,
    pause: 0,
    resume: 0,
  };

  @Input() set data(values: any) {
    switch (values) {
      case 'START':
        this.objData.start++;
        break;
      case 'RESUME':
        this.objData.resume++;
        break;
      case 'PAUSE':
        this.objData.pause++;
        break;
      default:
        this.objData = {
          start: 0,
          pause: 0,
          resume: 0,
        };
        break;
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
