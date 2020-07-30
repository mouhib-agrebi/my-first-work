import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { SimpleUserComponent } from './simple-user/simple-user.component';
import { LoginComponent} from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfilComponent } from './profil/profil.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"admin",component:AdminComponent },
  {path:"simple-user",component:SimpleUserComponent} ,
  {path:"home",component:HomeComponent},
  {path:"signup",component:SignupComponent},
  {path:"admin/profil",component:ProfilComponent} ,
  {path: "admin/admin-edit",component:AdminEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// create component ng g c my-first