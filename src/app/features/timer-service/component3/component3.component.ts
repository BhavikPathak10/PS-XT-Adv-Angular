import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.scss'],
})
export class Component3Component implements OnInit {
  log: any;
  constructor(private timerService: TimerService) {
    this.timerService.loggerDetails$.asObservable().subscribe((data) => {
      this.log = data;
    });
  }

  ngOnInit(): void {}
}
