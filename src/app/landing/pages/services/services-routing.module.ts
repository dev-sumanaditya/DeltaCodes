import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelComponent } from './panel/panel.component';
import { DefaultComponent } from './default/default.component';
import { ProductComponent } from './product/product.component';
import { WebComponent } from './web/web.component';
import { AppComponent } from './app/app.component';
import { SoftwareComponent } from './software/software.component';
import { TestingComponent } from './testing/testing.component';
import { ConsultingComponent } from './consulting/consulting.component';
import { UiuxComponent } from './uiux/uiux.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CyberComponent } from './cyber/cyber.component';
import { O3dComponent } from './o3d/o3d.component';
import { IotComponent } from './iot/iot.component';
import { RoboticsComponent } from './robotics/robotics.component';

const routes: Routes = [
  {path: '', component: PanelComponent, children: [
    {path: 'product', component: ProductComponent},
    {path: 'web', component: WebComponent},
    {path: 'app', component: AppComponent},
    {path: 'software', component: SoftwareComponent},
    {path: 'testing', component: TestingComponent},
    {path: 'consulting', component: ConsultingComponent},
    {path: 'uiux', component: UiuxComponent},
    {path: 'analytics', component: AnalyticsComponent},
    {path: 'security', component: CyberComponent},
    {path: '3d', component: O3dComponent},
    {path: 'iot', component: IotComponent},
    {path: 'robotics', component: RoboticsComponent},
    {path: '', component: DefaultComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
