import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [
  {path: '', component: PanelComponent, children: [
    {path: 'logistics', component: LogisticsComponent},
    {path: 'oil', component: OilComponent},
    {path: 'telecom', component: TelecomComponent},
    {path: 'tech', component: TechComponent},
    {path: 'financial', component: FinancialComponent},
    {path: 'healthcare', component: HealthcareComponent},
    {path: 'travel', component: TravelComponent},
    {path: 'retail', component: RetailComponent},
    {path: 'education', component: EducationComponent},
    {path: '', component: DefaultComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndustriesRoutingModule { }
