import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import { from } from 'rxjs';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: 'signup',component: SignupComponent},
  {path : 'login' ,component : LoginComponent},
  {path : 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }
