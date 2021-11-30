import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './unsecure/aboutus/aboutus.component';
import { ContactusComponent } from './unsecure/contactus/contactus.component';
import { LandingComponent } from './unsecure/landing/landing.component';
import { ServicesComponent } from './unsecure/services/services.component';
import { SignupComponent } from './unsecure/signup/signup.component';
import { LayoutComponent } from './unsecure/layout/layout.component';
import { SecurelayoutComponent } from './secure/securelayout/securelayout.component';
import { DashboardComponent } from './secure/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', component: LandingComponent},
      { path: 'aboutus', component: AboutusComponent },
      { path: 'contactus', component: ContactusComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'signup', component: SignupComponent },
    ]
  },
  {
    path: 'secure', component: SecurelayoutComponent, children: [
      { path: '', component: DashboardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
