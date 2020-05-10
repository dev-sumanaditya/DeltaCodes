import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChecklistRoutingModule } from './checklist-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ItemComponent } from './components/item/item.component';
import { TooltipModule } from 'ng2-tooltip-directive';


@NgModule({
  declarations: [HomeComponent, ItemComponent],
  imports: [
    CommonModule,
    ChecklistRoutingModule,
    TooltipModule
  ]
})
export class ChecklistModule { }
