import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
import { SiteMapComponent } from './site-map/site-map.component';
import { PanelComponent } from './panel/panel.component';


const routes: Routes = [
  {path: '', component: PanelComponent, children: [
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'cookie-policy', component: CookiePolicyComponent},
    {path: '', component: SiteMapComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
