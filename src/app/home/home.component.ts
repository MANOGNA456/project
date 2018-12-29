import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MainService} from '../CommonService/main.service';
  import { from } from 'rxjs';
  import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
// catarray: [];
// subCatArray:[];
// imgDetails:any;
// data:[];
productlist:any;
  constructor(private router: Router) { 
    // this.services.getuserdetailsbyid(id)
  }

  ngOnInit() {
    // // this.getCatDetails();
    // this.getHomeImgDetails();
    // this.goToProductslist(id);
  }

  goToProductslist(id){
    console.log(id);
    
    this.router.navigate(['./productslist',{productlist:id}])
  }

  getAllProductsFromCart(){
    
      this.router.navigate(['./mycart']);
      
    
  }
  logOut(){
    Swal('logged out successfully');
    this.router.navigate(['./login'])
  }
  // gotoheadphones(id){
  //   console.log(id);
  // }
//  public result:any;
  // getCatDetails(){
  //   this.services.getCategoryDetails().subscribe((data)=>{
  //     // debugger
  //     console.log('Data requested ... ',data["message"]);
  //     this.catarray = data["message"];
  //     console.log(this.catarray);

  //     //  this.result=data["message"][0];
  //     // for(let i=0;i<this.result.length;i++){
  //     //   let collect=data["message"][i].children;
  //     //   // this.data.push(data["message"][0]);
  //     // }

     
      
  //     console.log(this.subCatArray)
  //   })
  // }
 
  // getHomeImgDetails(){
  //   this.services.getHomePageImageDetails().subscribe((data)=>{
  //     console.log(data["message"]);
  //     this.imgDetails = data["message"];
  //     console.log(this.imgDetails);
  //   })
  // }
}
