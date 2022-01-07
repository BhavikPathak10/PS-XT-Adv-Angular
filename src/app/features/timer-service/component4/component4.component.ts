import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.scss'],
})
export class Component4Component implements OnInit {
  clickCounts: any;
  constructor(public timerService: TimerService) {
    this.timerService.clickDetails$.asObservable().subscribe((data) => {
      this.clickCounts = data;
    });
  }

  ngOnInit(): void {}
}
