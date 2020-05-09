import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PanelComponent } from './panel/panel.component';
import { DashComponent } from './pages/dash/dash.component';


const routes: Routes = [
  {path: 'auth', component: AuthComponent},
  {path: '', component: PanelComponent, children: [
    {path: '', component: DashComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
