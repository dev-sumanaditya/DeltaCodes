import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningRoutingModule } from './learning-routing.module';
import { HomeComponent } from './home/home.component';
import { ReaderComponent } from './components/reader/reader.component';

import { NgAisModule } from 'angular-instantsearch';


@NgModule({
  declarations: [HomeComponent, ReaderComponent],
  imports: [
    CommonModule,
    LearningRoutingModule
  ]
})
export class LearningModule { }
