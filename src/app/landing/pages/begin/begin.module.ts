import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeginRoutingModule } from './begin-routing.module';
import { PanelComponent } from './panel/panel.component';

@NgModule({
  declarations: [PanelComponent],
  imports: [
    CommonModule,
    BeginRoutingModule
  ]
})
export class BeginModule { }
