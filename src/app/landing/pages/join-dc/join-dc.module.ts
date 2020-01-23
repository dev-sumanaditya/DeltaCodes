import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { JoinDCRoutingModule } from './join-dc-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    JoinDCRoutingModule
  ]
})
export class JoinDCModule { }
