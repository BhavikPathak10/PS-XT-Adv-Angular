import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimerRoutingModule } from './timer-routing.module';
import { TimerComponent } from './timer.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CountdownControllerComponent } from './countdown-controller/countdown-controller.component';
import { CountdownLoggerComponent } from './countdown-logger/countdown-logger.component';
import { CountdownClickLoggerComponent } from './countdown-click-logger/countdown-click-logger.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TimerComponent,
    CountdownTimerComponent,
    CountdownControllerComponent,
    CountdownLoggerComponent,
    CountdownClickLoggerComponent,
  ],
  imports: [
    CommonModule,
    TimerRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class TimerModule {}
