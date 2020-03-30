import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';

import { PanelComponent } from './panel/panel.component';
import { C404Component } from './pages/c404/c404.component';


@NgModule({
  declarations: [PanelComponent, C404Component],
  imports: [
    CommonModule,
    LandingRoutingModule,
  ]
})
export class LandingModule { }
