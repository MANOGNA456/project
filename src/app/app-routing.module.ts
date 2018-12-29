import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import { from } from 'rxjs';
import {HomeComponent} from './home/home.component';
import {HeadphonesComponent} from './headphones/headphones.component';
import {ProductdetailsComponent} from './productdetails/productdetails.component';
import {ProductsListComponent} from './products-list/products-list.component';
import {MyCartComponent} from './my-cart/my-cart.component';
const routes: Routes = [
  {path: 'signup',component: SignupComponent},
  {path : 'login' ,component : LoginComponent},
  {path : 'home', component: HomeComponent},
  {path : 'headphones', component : HeadphonesComponent},
  {path : '', redirectTo:'login',pathMatch:'full'},
  {path : 'productdetails', component : ProductdetailsComponent},
  {path : 'productslist', component : ProductsListComponent},
  {path: 'mycart',component : MyCartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }
