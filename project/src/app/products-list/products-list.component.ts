import { Component, OnInit } from '@angular/core';
import { MainService } from '../CommonService/main.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  list: any = [];
  productList: any;
  itemlist:any;
  data: any;
  product: string;
  
//   catarray: [];
// subCatArray:[];
  constructor(private services: MainService, private router: Router,public activateRoute: ActivatedRoute) {
   // var x = get id from home
   //call product det by id api
   this.productList = this.activateRoute.snapshot.params['productlist']
   console.log('user', this.productList);
   this.services.getSubCategoryList(this.productList).subscribe((data)=>{
    console.log(data["message"]);
    console.log(data["message"]["itemList"]);
    this.itemlist = data["message"]["itemList"];

   })

   }
   getAllProductsFromCart(){
    
    this.router.navigate(['./mycart']);
    
  
}

   goToProductslist(id){
    console.log(id);
    
    this.router.navigate(['./productslist',{productlist:id}])
  }
   goToProdDetais(prod) {
    console.log(prod)
    this.product = JSON.stringify(prod);
    console.log(this.product)
    this.router.navigate(['./productdetails', { product: this.product }], { skipLocationChange: true })
  }

  logOut(){
    Swal('logged out successfully');
    this.router.navigate(['./login'])
  }

  ngOnInit() {
    // this.getCatDetails();
    // this.getDetails();
  }
  // goToProductslist(){
  //   this.router.navigate(['/productslist'])
  // }
  

  // getCatDetails(){
  //   this.services.getCategoryDetails().subscribe((data)=>{
  //     // debugger
  //     console.log('Data requested ... ',data["message"]);
  //     this.catarray = data["message"];
  //     console.log(this.catarray);
      
  //     // console.log(this.subCatArray);
  //   })
  // }

  // getDetails() {
  //   this.services
  //     .getAllProducts()
  //     .subscribe((data) => {

  //       console.log('Data requested ... ', data["message"]);
  //       this.list = data["message"];


  //     });

  // }
  // goToPRodDet(prod) {
  //   console.log(prod);
  //   //nav - details + pass prod
  // }

  
}
