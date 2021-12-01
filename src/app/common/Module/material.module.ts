import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog'
import { MatInputModule } from '@angular/material/input'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from '../footer/footer.component';
@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
  CommonModule,
  TranslateModule
  ],
  exports: [
  CommonModule,
   MatToolbarModule,
   MatButtonModule,
   MatCardModule,
   MatInputModule,
   MatDialogModule,
   MatMenuModule,
   MatIconModule,
   FlexLayoutModule,
   FormsModule,
   ReactiveFormsModule,
   MatCardModule,
   MatButtonModule,
   MatToolbarModule,
   MatIconModule,
   MatMenuModule,
   MatDialogModule,
   MatInputModule,
   TranslateModule,
   FooterComponent,
   MatSnackBarModule,
   ],
})
export class CustomMaterialModule { }
