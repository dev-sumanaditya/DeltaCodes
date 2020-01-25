import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './forms/info/info.component';
import { LocationComponent } from './forms/location/location.component';
import { QualificationComponent } from './forms/qualification/qualification.component';
import { SkillsComponent } from './forms/skills/skills.component';
import { CvComponent } from './forms/cv/cv.component';




const routes: Routes = [
    {path: '', component: HomeComponent, children: [
      {path: 'location', component: LocationComponent},
      {path: 'qualification', component: QualificationComponent},
      {path: 'skills', component: SkillsComponent},
      {path: 'resume', component: CvComponent},
      {path: '', component: InfoComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JoinDCRoutingModule { }