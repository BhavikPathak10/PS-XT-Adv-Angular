import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss'],
})
export class Component2Component implements OnInit {
  timerForm: FormGroup = new FormGroup({});
  counterDetail: any;
  counterLog: Array<any> = [];

  constructor(private timerService: TimerService) {
    this.timerService.counterDetails$.asObservable().subscribe((data) => {
      this.counterDetail = data;
    });
  }

  ngOnInit(): void {
    this.timerForm = new FormGroup({
      limit: new FormControl(0, [Validators.required, Validators.min(1)]),
      operation: new FormControl('START'),
    });
  }

  submitForm() {
    let op = this.timerForm.get('operation')?.value;
    this.timerService.setData(this.timerForm.value);
    this.counterLog.push({
      limit: this.counterDetail
        ? this.counterDetail
        : this.timerForm.get('limit')?.value,
      op,
    });
    this.timerForm
      .get('operation')
      ?.setValue(op == 'START' ? 'PAUSE' : op == 'PAUSE' ? 'RESUME' : 'PAUSE');
  }

  resetForm() {
    this.counterLog = [];
    this.timerForm.reset({
      limit: 0,
      operation: 'START',
    });
    this.timerService.setData({
      limit: 0,
      operation: null,
    });
  }
}
