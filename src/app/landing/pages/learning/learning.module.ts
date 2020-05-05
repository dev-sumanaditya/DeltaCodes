import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningRoutingModule } from './learning-routing.module';
import { HomeComponent } from './home/home.component';
import { ReaderComponent } from './components/reader/reader.component';
import { ListitemComponent } from './components/listitem/listitem.component';


@NgModule({
  declarations: [HomeComponent, ReaderComponent, ListitemComponent],
  imports: [
    CommonModule,
    LearningRoutingModule
  ]
})
export class LearningModule { }
