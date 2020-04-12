import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndustriesRoutingModule } from './industries-routing.module';
import { LogisticsComponent } from './pages/logistics/logistics.component';
import { OilComponent } from './pages/oil/oil.component';
import { TelecomComponent } from './pages/telecom/telecom.component';
import { TechComponent } from './pages/tech/tech.component';
import { FinancialComponent } from './pages/financial/financial.component';
import { HealthcareComponent } from './pages/healthcare/healthcare.component';
import { TravelComponent } from './pages/travel/travel.component';
import { RetailComponent } from './pages/retail/retail.component';
import { EducationComponent } from './pages/education/education.component';
import { DefaultComponent } from './pages/default/default.component';
import { PanelComponent } from './panel/panel.component';
import { CoverComponent } from './components/cover/cover.component';
import { ContactComponent } from './components/contact/contact.component';
import { DescComponent } from './components/desc/desc.component';
import { ServingsComponent } from './components/servings/servings.component';
import { PostsComponent } from './components/posts/posts.component';
import { ClientComponent } from './components/client/client.component';


@NgModule({
  declarations: [
    LogisticsComponent,
    OilComponent,
    TelecomComponent,
    TechComponent,
    FinancialComponent,
    HealthcareComponent,
    TravelComponent,
    RetailComponent,
    EducationComponent,
    DefaultComponent,
    PanelComponent,
    CoverComponent,
    ContactComponent,
    DescComponent,
    ServingsComponent,
    PostsComponent,
    ClientComponent
  ],
  imports: [
    CommonModule,
    IndustriesRoutingModule
  ]
})
export class IndustriesModule { }
