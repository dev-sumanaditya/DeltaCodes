import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { AboutRoutingModule } from './about-routing.module';

import { NgxInViewportModule } from '@ngx-lite/in-viewport';


@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    NgxInViewportModule
  ]
})
export class AboutModule { }
