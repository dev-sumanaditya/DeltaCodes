import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { DragScrollModule } from 'ngx-drag-scroll';

import { PanelComponent } from './panel/panel.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SliderbgComponent } from './pages/components/sliderbg/sliderbg.component';
import { CareerComponent } from './pages/career/career.component';
import { StartComponent } from './pages/start/start.component';
import { BlogComponent } from './pages/blog/blog.component';


@NgModule({
  declarations: [PanelComponent, HomeComponent, AboutComponent, SliderbgComponent, CareerComponent, StartComponent, BlogComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    DragScrollModule
  ]
})
export class LandingModule { }
