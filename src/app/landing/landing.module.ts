import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { DragScrollModule } from 'ngx-drag-scroll';

import { PanelComponent } from './panel/panel.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { SliderbgComponent } from './pages/components/sliderbg/sliderbg.component';


@NgModule({
  declarations: [PanelComponent, HomeComponent, ContactComponent, AboutComponent, SliderbgComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    DragScrollModule
  ]
})
export class LandingModule { }
