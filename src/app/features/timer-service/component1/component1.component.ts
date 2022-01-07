import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss'],
})
export class Component1Component implements OnInit {
  counter: any;
  constructor(public timerService: TimerService) {
    this.timerService.counterDetails$.asObservable().subscribe((data) => {
      this.counter = data;
    });
  }

  ngOnInit(): void {}
}
