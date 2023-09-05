import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlsRoutingModule } from './controls-routing.module';
import { ControlsComponent } from './controls.component';


@NgModule({
  declarations: [
    ControlsComponent
  ],
  imports: [
    CommonModule,
    ControlsRoutingModule
  ]
})
export class ControlsModule { }
