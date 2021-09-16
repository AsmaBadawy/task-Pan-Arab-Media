import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HeaderComponent } from './header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from '../app-routing.module';
import {MatTreeModule} from '@angular/material/tree';
import { MatSnackBarComponent } from './MatSnackBar/mat-snack-bar/mat-snack-bar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MatSnackBarComponent,
    FooterComponent,
    
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
     // * MATERIAL IMPORTS
     MatSidenavModule,
     MatToolbarModule,
     MatMenuModule,
     MatIconModule,
     MatDividerModule,
     MatListModule,
     MatTreeModule,
     MatSnackBarModule,
     FormsModule,
     MatDialogModule
    
  ],

  exports: [
    HeaderComponent,
    MatSnackBarComponent,
    FooterComponent

  
    
  ]
})
export class SharedModule { }
