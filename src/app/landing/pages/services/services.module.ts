import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ProductComponent } from './product/product.component';
import { WebComponent } from './web/web.component';
import { AppComponent } from './app/app.component';
import { SoftwareComponent } from './software/software.component';
import { TestingComponent } from './testing/testing.component';
import { ConsultingComponent } from './consulting/consulting.component';
import { UiuxComponent } from './uiux/uiux.component';
import { CyberComponent } from './cyber/cyber.component';
import { O3dComponent } from './o3d/o3d.component';
import { IotComponent } from './iot/iot.component';
import { RoboticsComponent } from './robotics/robotics.component';
import { PanelComponent } from './panel/panel.component';
import { ServicesRoutingModule } from './services-routing.module';
import { DefaultComponent } from './default/default.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FaqComponent } from './components/faq/faq.component';
import { DriveComponent } from './components/drive/drive.component';
import { VidComponent } from './components/vid/vid.component';
import { ClientStoriesComponent } from './components/client-stories/client-stories.component';
import { ContactComponent } from './components/contact/contact.component';
import { LearnComponent } from './components/learn/learn.component';



@NgModule({
  declarations: [
    AnalyticsComponent,
    ProductComponent,
    WebComponent,
    AppComponent,
    SoftwareComponent,
    TestingComponent,
    ConsultingComponent,
    UiuxComponent,
    CyberComponent,
    O3dComponent,
    IotComponent,
    RoboticsComponent,
    PanelComponent,
    DefaultComponent,
    TopbarComponent,
    FaqComponent,
    DriveComponent,
    VidComponent,
    ClientStoriesComponent,
    ContactComponent,
    LearnComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
