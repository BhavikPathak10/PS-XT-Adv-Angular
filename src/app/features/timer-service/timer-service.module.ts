import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimerServiceRoutingModule } from './timer-service-routing.module';
import { TimerServiceComponent } from './timer-service.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [
    TimerServiceComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    Component4Component,
  ],
  imports: [
    CommonModule,
    TimerServiceRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class TimerServiceModule {}
