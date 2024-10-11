import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { ButtonsModule, ControlsModule } from 'src/app/shared';
// import { ButtonsModule } from '@app/shared';
// import { ButtonsModule } from '../../../../shared/buttons';

import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    SharedComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ButtonsModule,
    ControlsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
