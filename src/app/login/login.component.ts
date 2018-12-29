import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { login } from '../interface/interface';
import { MainService } from '../CommonService/main.service';
import { Router } from '@angular/router' //imported router
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})


export class LoginComponent implements OnInit {
errorMessage:any;
  loginInterface: login = {
    emailID: '',
    password: ''
  }

  constructor(private router: Router, private services: MainService) { }

  ngOnInit() {
  }

  
  onLogin() {
    
    console.log(this.loginInterface);
    this.services.loginDetails(this.loginInterface).subscribe((res) => {
      console.log(res);
      // console.log("typeof ::;",res)
      // console.log("typeof ::;",res["success"])
      var result=res["success"]
       if(result==true){
        //  localStorage.setItem("userId","U000000001");
         this.errorMessage=false;
         this.router.navigate(['/home']);
         //false
       }else{
         //truee
         this.errorMessage = res["message"];
       }
      
    // },(err)=> {
    //   console.log(err)
    // }    
  })
}

  onSignup() {
    // Swal('Thankyou for registering!Please login here!');
    this.router.navigate(['/signup']);
  }

}
