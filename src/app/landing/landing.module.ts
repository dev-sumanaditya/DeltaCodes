import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { HomeComponent } from './pages/home/home.component';
import { LandingRoutingModule } from './landing-routing.module';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [PanelComponent, HomeComponent, ContactComponent, AboutComponent],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
