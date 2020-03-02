import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelComponent } from './panel/panel.component';
import { WebComponent } from './pages/web/web.component';
import { ServComponent } from './pages/serv/serv.component';
import { TechComponent } from './pages/tech/tech.component';
import { HireComponent } from './pages/hire/hire.component';
import { InfoComponent } from './pages/info/info.component';
import { SuccessComponent } from './pages/success/success.component';

const routes: Routes = [
  {path: '', component: PanelComponent, children: [
    {path: 'services', component: ServComponent},
    {path: 'tech', component: TechComponent},
    {path: 'hire', component: HireComponent},
    {path: 'info', component:InfoComponent},
    {path: 'success', component: SuccessComponent},
    {path: '', component: WebComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeginRoutingModule { }
