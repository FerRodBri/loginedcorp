import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RUTAS } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PwdComponent } from './pwd/pwd.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PwdComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    // Angular Material
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    // Router
    RouterModule.forRoot( RUTAS )
  ],
  exports:  [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
