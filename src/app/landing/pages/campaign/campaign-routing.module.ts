import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Free10Component } from './free10/free10.component';
import { RegfreeComponent } from './regfree/regfree.component';


const routes: Routes = [
  {path: 'register', component: RegfreeComponent},
  {path: '', component: Free10Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }
