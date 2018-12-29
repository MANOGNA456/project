import { Component, OnInit } from '@angular/core';
import {signup} from '../interface/interface';
import { Router} from '@angular/router' //imported router
import {MainService} from '../CommonService/main.service';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
 
// CommonJS


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  

  
signupInterface:signup = {name : '',emailID:'',password:'',phonenumber:null,address:''};
confirmPassword:any;
  constructor(private router: Router,private services:MainService) { }

  ngOnInit() {
  }

  clear(){
    this.signupInterface.name=null;
    this.signupInterface.emailID=null;
    this.signupInterface.password=null;
    this.confirmPassword=null;
    this.signupInterface.phonenumber=null;
    this.signupInterface.address=null;
  }

  onSubmit(){
    
    console.log(this.signupInterface);
    if(this.signupInterface.password === this.confirmPassword){

    
      this.services.signupDetails(this.signupInterface).subscribe((res) => {
       console.log(res);
       Swal('Registered Successfully!Please login here')
       this.router.navigate(['/login']);
      })
    }else{
      Swal('Password and confirm passwords are not matching.Please try once again')
    }
   
     
  }
  onKeyPress(event) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.charCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
    return true;
  }
}
  
