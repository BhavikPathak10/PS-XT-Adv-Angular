import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-countdown-controller',
  templateUrl: './countdown-controller.component.html',
  styleUrls: ['./countdown-controller.component.scss'],
})
export class CountdownControllerComponent implements OnInit {
  timerForm: FormGroup;
  arrData: Array<any> = [];

  @Output() counterUpdated: EventEmitter<any> = new EventEmitter<any>();
  @Output() counterReset: EventEmitter<any> = new EventEmitter<any>();

  @Input() set data(values: any) {
    let limit = values?.limit;
    let op = values?.operation;
    if (op && limit) this.arrData.push({ op, limit });
  }

  constructor() {
    this.timerForm = new FormGroup({
      limit: new FormControl(0, [Validators.required, Validators.min(1)]),
      operation: new FormControl('START'),
    });
  }

  ngOnInit(): void {}

  submitForm() {
    let op = this.timerForm.get('operation')?.value;
    this.counterUpdated.emit(this.timerForm.value);
    this.timerForm
      .get('operation')
      ?.setValue(op == 'START' ? 'PAUSE' : op == 'PAUSE' ? 'RESUME' : 'PAUSE');
  }

  resetForm() {
    this.timerForm.reset({
      limit: 0,
      operation: 'START',
    });
    this.arrData = [];
    this.counterReset.emit();
  }
}
