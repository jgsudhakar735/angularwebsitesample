import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RegisterComponent } from '../register/register.component';
import { SecurelayoutComponent } from '../securelayout/securelayout.component';
import { SettingsComponent } from '../settings/settings.component';
import { UsersComponent } from '../users/users.component';

const routes: Routes = [
  {
    path: '', component: SecurelayoutComponent, children: [
      { path: '', component: DashboardComponent },
      { path: 'user', component: UsersComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'settings', component: SettingsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }
