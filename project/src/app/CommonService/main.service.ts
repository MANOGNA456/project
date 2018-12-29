import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import { Observable, of, Subject } from 'rxjs';
// import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class MainService {
  url: any = "http://localhost:5000";
  userId:any = localStorage.getItem("userId");
  constructor(private http: HttpClient) { }
  //signup component ts
  signupDetails(details) {
    console.log(details);
    return this.http.post(this.url + '/signup/postdetails', details);

  }

  //login component ts
  loginDetails(loginDetails) {

    console.log(loginDetails);
    return this.http.post(this.url + '/login/authenticate', loginDetails);
  }

  //product-list component ts
  getAllProducts() {
    return this.http.get(this.url + '/productdetails/getproductdetails');
  }
  //home component ts
  getCategoryDetails() {
    return this.http.get(this.url + '/categorydetails/getcategorydetails');
  }



  getSubCategoryList(id) {
    return this.http.get(this.url + "/subcategorydetails/getdetailsbyid/" + id);
  }

  getAllProductsFromCart(userId) {
    console.log(userId);
    return this.http.get(this.url + "/cartdetails/getcartproductsbyid/" + userId);
  }

  addProductToCart(productDetails) {
    console.log(productDetails,typeof productDetails);
    return new Promise((resolve, reject) => {
      this.http.post(this.url + "/cartdetails/addtocart", productDetails).subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      })
    })
  }

deleteProductFromCart(userId,productid){
  console.log(userId,productid);
  return this.http.delete(this.url + '/cartdetails/deleteproduct/' + userId + '/' + productid);
}

  // getproductdetailsbyid(productid){
  //   return  this.http.get(this.url + '/productdetails/getproductdetailsbyid' + productid);
  // }

  // addtocart(userId,productid){
  //   console.log(userId,productid)
  //   return this.http.put(this.url + '/updatedetails'+userId,productid);
  // }

  // getuserdetailsbyid(id){
  //   return this.http.get(this.url + '/getdetailsbyid' + id);
  // }
  // getHomePageImageDetails(){
  //   return this.http.get(this.url + '/homepageimagedetails/gethomepageimagedetails');
  // }

}