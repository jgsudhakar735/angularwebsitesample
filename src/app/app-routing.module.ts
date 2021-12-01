import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './common/auth.guard';
import { SecureModule } from './secure/secure/secure.module';
import { UnsecureModule } from './unsecure/unsecure/unsecure.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./unsecure/unsecure/unsecure.module').then(m => m.UnsecureModule)
  },
  {
    path: 'secure',
    canActivate: [AuthGuard],
    loadChildren: () => import('./secure/secure/secure.module').then(m => SecureModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
