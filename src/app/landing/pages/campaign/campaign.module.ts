import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignRoutingModule } from './campaign-routing.module';
import { Free10Component } from './free10/free10.component';
import { RegfreeComponent } from './regfree/regfree.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CampaignService } from '../../services/campaign.service';


@NgModule({
  declarations: [Free10Component, RegfreeComponent],
  imports: [
    CommonModule,
    CampaignRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    CampaignService
  ]
})
export class CampaignModule { }
