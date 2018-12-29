import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
// import {SlideshowModule} from 'ng-simple-slideshow';
import {HttpClientModule} from '@angular/common/http';
import {MainService} from './CommonService/main.service';
import { NgImageSliderModule } from 'ng-image-slider';
import { HeadphonesComponent } from './headphones/headphones.component';
import { ProductsComponent } from './products/products.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import {ProductsListComponent} from './products-list/products-list.component';
import {StorageServiceModule} from 'angular-webstorage-service';
import { from } from 'rxjs';
import { MyCartComponent } from './my-cart/my-cart.component';
import { Sample1Component } from './sample1/sample1.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    HeadphonesComponent,
    ProductsComponent,
    ProductdetailsComponent,
    ProductsListComponent,
    MyCartComponent,
    Sample1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StorageServiceModule,

    HttpClientModule,
    NgImageSliderModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
