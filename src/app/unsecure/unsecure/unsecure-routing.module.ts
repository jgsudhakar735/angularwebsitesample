import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { LandingComponent } from '../landing/landing.component';
import { LayoutComponent } from '../layout/layout.component';
import { ServicesComponent } from '../services/services.component';
import { SignupComponent } from '../signup/signup.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', component: LandingComponent},
      { path: 'aboutus', component: AboutusComponent },
      { path: 'contactus', component: ContactusComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'signup', component: SignupComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnsecureRoutingModule { }
