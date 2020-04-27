import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SliderbgComponent } from './components/sliderbg/sliderbg.component';
import { HomeRoutingModule } from './home-routing.module';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [HomeComponent, SliderbgComponent, ContactComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
