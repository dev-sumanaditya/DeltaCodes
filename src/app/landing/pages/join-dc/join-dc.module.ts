import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { JoinDCRoutingModule } from './join-dc-routing.module';
import { InfoComponent } from './forms/info/info.component';
import { LocationComponent } from './forms/location/location.component';
import { QualificationComponent } from './forms/qualification/qualification.component';
import { SkillsComponent } from './forms/skills/skills.component';
import { CvComponent } from './forms/cv/cv.component';
import { SuccessComponent } from './forms/success/success.component';


@NgModule({
  declarations: [HomeComponent, InfoComponent, LocationComponent, QualificationComponent, SkillsComponent, CvComponent, SuccessComponent],
  imports: [
    CommonModule,
    JoinDCRoutingModule
  ]
})
export class JoinDCModule { }
