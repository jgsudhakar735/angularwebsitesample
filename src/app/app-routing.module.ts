import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './unsecure/aboutus/aboutus.component';
import { ContactusComponent } from './unsecure/contactus/contactus.component';
import { LandingComponent } from './unsecure/landing/landing.component';
import { ServicesComponent } from './unsecure/services/services.component';
import { SignupComponent } from './unsecure/signup/signup.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
