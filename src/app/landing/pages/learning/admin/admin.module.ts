import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PanelComponent } from './panel/panel.component';
import { AuthComponent } from './auth/auth.component';
import { DashComponent } from './pages/dash/dash.component';
import { QuillModule } from 'ngx-quill';


@NgModule({
  declarations: [PanelComponent, AuthComponent, DashComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    QuillModule,
  ]
})
export class AdminModule { }
