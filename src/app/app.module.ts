import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './unsecure/landing/landing.component';
import { FooterComponent } from './common/footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './unsecure/header/header.component';
import { MatCardModule } from '@angular/material/card'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog'
import { MatInputModule } from '@angular/material/input'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AboutusComponent } from './unsecure/aboutus/aboutus.component';
import { ServicesComponent } from './unsecure/services/services.component';
import { ContactusComponent } from './unsecure/contactus/contactus.component';
import { SignupComponent } from './unsecure/signup/signup.component';
import { LayoutComponent } from './unsecure/layout/layout.component';
import { SecurelayoutComponent } from './secure/securelayout/securelayout.component';
import { DashboardComponent } from './secure/dashboard/dashboard.component';
import { SecureheaderComponent } from './secure/secureheader/secureheader.component';
import { SecurenavComponent } from './secure/securenav/securenav.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LandingComponent,
    HeaderComponent,
    AboutusComponent,
    ServicesComponent,
    ContactusComponent,
    SignupComponent,
    LayoutComponent,
    SecurelayoutComponent,
    DashboardComponent,
    SecureheaderComponent,
    SecurenavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
