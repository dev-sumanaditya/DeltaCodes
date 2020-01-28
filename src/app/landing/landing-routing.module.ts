import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanelComponent } from './panel/panel.component';


const routes: Routes = [
    {path: 'join', loadChildren: './pages/join-dc/join-dc.module#JoinDCModule'},
    {path: 'begin', loadChildren: './pages/begin/begin.module#BeginModule'},
    {path: '', component: PanelComponent, children: [
      {path: 'about', loadChildren: './pages/aboutModule/about.module#AboutModule'},
      {path: 'career', loadChildren: './pages/careerModule/career.module#CareerModule' },
      {path: 'start', loadChildren: './pages/startModule/start.module#StartModule' },
      {path: 'blog', loadChildren: './pages/blogModule/blog.module#BlogModule' },
      {path: '', loadChildren: './pages/homeModule/home.module#HomeModule'}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }