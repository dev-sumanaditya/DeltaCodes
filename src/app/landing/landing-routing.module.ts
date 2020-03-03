import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanelComponent } from './panel/panel.component';


const routes: Routes = [
    {path: 'join', loadChildren: () => import('./pages/join-dc/join-dc.module').then(m => m.JoinDCModule)},
    {path: 'begin', loadChildren: () => import('./pages/begin/begin.module').then(m => m.BeginModule)},
    {path: 'learning', loadChildren: () => import('./pages/learning/learning.module').then(m => m.LearningModule)},
    {path: '', component: PanelComponent, children: [
      {path: 'about', loadChildren: () => import('./pages/aboutModule/about.module').then(m => m.AboutModule)},
      {path: 'career', loadChildren: () => import('./pages/careerModule/career.module').then(m => m.CareerModule) },
      {path: 'start', loadChildren: () => import('./pages/startModule/start.module').then(m => m.StartModule) },
      {path: 'blog', loadChildren: () => import('./pages/blogModule/blog.module').then(m => m.BlogModule) },
      {path: 'contact', loadChildren: () => import('./pages/contact-module/contact-module.module').then(m => m.ContactModuleModule)},
      {path: '', loadChildren: () => import('./pages/homeModule/home.module').then(m => m.HomeModule)}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
