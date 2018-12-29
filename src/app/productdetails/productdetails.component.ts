import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';//to get data from the route
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MainService } from '../CommonService/main.service';
import { addToCart } from '../interface/interface';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {


  productDetail: any;
  // addToCartInterface:addToCart={product_id:'',prodname: '',brandname:'',price:null,description:'',image:''}
  // 
  // localStorage.["userId"]="U000000001";
  constructor(public activateRoute: ActivatedRoute, private router: Router, private services: MainService) {
    // this.subUser = this.activateRoute.snapshot.params['prod']
    //   console.log('user', this.subUser);
    this.productDetail = JSON.parse(this.activateRoute.snapshot.params['product'])
    console.log('user', this.productDetail);

  }

  goToProductslist(id){
    console.log(id);
    
    this.router.navigate(['./productslist',{productlist:id}])
  }
  logOut(){
    Swal('logged out successfully');
    this.router.navigate(['./login'])
  }
  buyNow() {
    Swal('YOUR PAYMENT IS SUCCESSFUL!!!',
      'YOUR ORDER WILL BE DELIVERED SOON:)  HOPE YOU HAD A SATISFIED SHOPPING! THANKYOU FOR YOUR INTEREST ON OUR ONLINE SITE,PLEASE DO VISIT OUR WEBSITE AGAIN');
  }

  ngOnInit() {
  }
  // addtocart(id) {
  // console.log(id);

  // //put service
  // }
  getAllProductsFromCart(){
    
    this.router.navigate(['./mycart']);
    
  
}
  addproducttocart(data) {
    console.log(data);
    let cartdata:any = {};
    cartdata.userId = localStorage.getItem("userId");
    cartdata.product_details = data;//storing data as array
    
    console.log(cartdata);

    this.services.addProductToCart(cartdata).then((res) => {
      console.log(res,typeof res);
      this.router.navigate(['./mycart']);
    }).catch(err => {
      console.log(err);
    })
  }
}
