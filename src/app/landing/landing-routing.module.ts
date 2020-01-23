import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanelComponent } from './panel/panel.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CareerComponent } from './pages/career/career.component';
import { StartComponent } from './pages/start/start.component';
import { BlogComponent } from './pages/blog/blog.component';


const routes: Routes = [
    {path: '', component: PanelComponent, children: [
      {path: 'about', component: AboutComponent},
      {path: 'career', component: CareerComponent},
      {path: 'start', component: StartComponent},
      {path: 'blog', component:BlogComponent},
      {path: '', component: HomeComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }