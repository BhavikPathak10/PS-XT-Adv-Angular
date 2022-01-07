import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-logger',
  templateUrl: './countdown-logger.component.html',
  styleUrls: ['./countdown-logger.component.scss'],
})
export class CountdownLoggerComponent implements OnInit {
  arrData: Array<any> = [];

  @Input() set data(values: any) {
    let op = values;
    op ? this.arrData.push({ op, time: new Date() }) : (this.arrData = []);
  }

  constructor() {}

  ngOnInit(): void {}
}
