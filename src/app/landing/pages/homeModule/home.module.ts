import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SliderbgComponent } from './components/sliderbg/sliderbg.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent, SliderbgComponent],
  imports: [
    CommonModule,
    DragScrollModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
