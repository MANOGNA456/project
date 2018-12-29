import { Component, OnInit } from '@angular/core';
import {MainService} from '../CommonService/main.service';
import { identifierModuleUrl } from '@angular/compiler';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  cartProducts = [];
  constructor(private services: MainService) { }

  // userId:any = {};
  userId:any = localStorage.getItem("userId");
  ngOnInit() {
   this.getAllProductsFromCart();
  }
// var data={product_id:any,userId:any}
getAllProductsFromCart(){
  this.services.getAllProductsFromCart(this.userId).subscribe((data:any)=>{
    this.cartProducts = data.message;
    console.log(this.cartProducts);
  });
}
deleteProductFromCart(id){
  console.log(id);
  this.services.deleteProductFromCart(this.userId,id).subscribe((data)=>{
    console.log(data);
    this.getAllProductsFromCart();
  })
}

buyNow() {
  Swal('YOUR PAYMENT IS SUCCESSFUL!!!',
    'YOUR ORDER WILL BE DELIVERED SOON:)  HOPE YOU HAD A SATISFIED SHOPPING! THANKYOU FOR YOUR INTEREST ON OUR ONLINE SITE,PLEASE DO VISIT OUR WEBSITE AGAIN');
}



  // getAllCartProducts(){
  //   this.services.getAllProductsFromCart(this.userId).subscribe(data=>{
  //     this.cartProducts = data;
  //     console.log(data);
  //     console.log(data["message"], typeof data["message"]);
  //     // this.cartProducts = data["message"];
      
  //     // console.log(this.cartProducts)
  //   })
  // }
  // getAllProductsFromCart(userId){
  //   this.services.getAllProductsFromCart(userId).subscribe((data)=>{
  //     console.log(data);
  //     console.log(data["message"][0]["product_details"]);
  //     this.productsList = JSON.stringify(data["message"][0]["product_details"][0]);
  //     console.log(this.productsList);
  //     this.productList = this.productsList;
  //   })
  // }
}
