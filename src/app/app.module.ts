import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from "@angular/fire/auth";

// --------


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//import {  HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { SimpleUserComponent } from './simple-user/simple-user.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfilComponent } from './profil/profil.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    SimpleUserComponent,
    LoginComponent,
    SignupComponent,
    ProfilComponent,
    AdminEditComponent

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireAuthModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
