import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSnackBarComponent } from './shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';
import { PublicLayoutComponent } from './_layouts/public-layout/public-layout.component';
import { ListofarticlesComponent } from './article/listofarticles/listofarticles.component';
import { DetailarticleComponent } from './article/detailarticle/detailarticle.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PublicLayoutComponent,
    ListofarticlesComponent,
    DetailarticleComponent,
   


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
   
    RouterModule,
    HttpClientModule,
    
    //shared module
    SharedModule,
    
    //flex layout
    FlexLayoutModule,
   // * MATERIAL IMPORTS
   MatSidenavModule,
   MatCardModule,
   MatButtonModule,
   MatDividerModule,
   MatFormFieldModule,
   MatInputModule

  ],
  providers: [MatSnackBarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
