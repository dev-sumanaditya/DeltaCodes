import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningRoutingModule } from './learning-routing.module';
import { HomeComponent } from './home/home.component';
import { ReaderComponent } from './components/reader/reader.component';
import { ListitemComponent } from './components/listitem/listitem.component';
import { LearnComponent } from './pages/learn/learn.component';
import { DefaultComponent } from './pages/default/default.component';


@NgModule({
  declarations: [HomeComponent, ReaderComponent, ListitemComponent, LearnComponent, DefaultComponent],
  imports: [
    CommonModule,
    LearningRoutingModule
  ]
})
export class LearningModule { }
