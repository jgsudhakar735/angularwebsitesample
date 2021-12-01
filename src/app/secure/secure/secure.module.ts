import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecureRoutingModule } from './secure-routing.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RegisterComponent } from '../register/register.component';
import { SecureheaderComponent } from '../secureheader/secureheader.component';
import { SecurelayoutComponent } from '../securelayout/securelayout.component';
import { SecurenavComponent } from '../securenav/securenav.component';
import { SettingsComponent } from '../settings/settings.component';
import { UsersComponent } from '../users/users.component';
import { CustomMaterialModule } from 'src/app/common/Module/material.module';


@NgModule({
  declarations: [
    DashboardComponent,
    RegisterComponent,
    SecureheaderComponent,
    SecurelayoutComponent,
    SecurenavComponent,
    SettingsComponent,
    UsersComponent,
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    SecureRoutingModule
  ]
})
export class SecureModule { }
