import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnsecureRoutingModule } from './unsecure-routing.module';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { ServicesComponent } from '../services/services.component';
import { SignupComponent } from '../signup/signup.component';
import { LandingComponent } from '../landing/landing.component';
import { LayoutComponent } from '../layout/layout.component';
import { HeaderComponent } from '../header/header.component';
import { CustomMaterialModule } from 'src/app/common/Module/material.module';


@NgModule({
  declarations: [
    AboutusComponent,
    ContactusComponent,
    ServicesComponent,
    SignupComponent,
    LandingComponent,
    LayoutComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    UnsecureRoutingModule
  ]
})
export class UnsecureModule { }
