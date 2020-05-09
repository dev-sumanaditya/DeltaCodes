import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DefaultComponent } from './pages/default/default.component';
import { LearnComponent } from './pages/learn/learn.component';


const routes: Routes = [
  {path: 'contributor', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path: '',  component: HomeComponent, children: [
    {path: 'topic/:id', component: LearnComponent},
    {path: '', component: DefaultComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningRoutingModule { }
