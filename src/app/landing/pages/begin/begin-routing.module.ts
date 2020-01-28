import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelComponent } from './panel/panel.component';
import { WebComponent } from './pages/web/web.component';
import { ServComponent } from './pages/serv/serv.component';
import { TechComponent } from './pages/tech/tech.component';

const routes: Routes = [
  {path: '', component: PanelComponent, children: [
    {path: 'services', component: ServComponent},
    {path: 'tech', component: TechComponent},
    {path: '', component: WebComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeginRoutingModule { }
