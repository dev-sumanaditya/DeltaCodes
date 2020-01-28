import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeginRoutingModule } from './begin-routing.module';
import { PanelComponent } from './panel/panel.component';
import { WebComponent } from './pages/web/web.component';
import { ServComponent } from './pages/serv/serv.component';
import { TechComponent } from './pages/tech/tech.component';

@NgModule({
  declarations: [PanelComponent, WebComponent, ServComponent, TechComponent],
  imports: [
    CommonModule,
    BeginRoutingModule
  ]
})
export class BeginModule { }
