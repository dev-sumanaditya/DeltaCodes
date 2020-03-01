import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SliderbgComponent } from './components/sliderbg/sliderbg.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent, SliderbgComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
