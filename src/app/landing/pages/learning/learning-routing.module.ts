import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DefaultComponent } from './pages/default/default.component';
import { LearnComponent } from './pages/learn/learn.component';


const routes: Routes = [
  {path: '',  component: HomeComponent, children: [
    {path: '', component: DefaultComponent},
    {path: 'topic', component: LearnComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningRoutingModule { }
