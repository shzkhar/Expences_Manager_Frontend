import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 email = "";
 password = "";

 constructor(private userService:UserService, private router:Router){}

 login(){
  console.log(this.email)
  console.log(this.password)

  let user = { 
    "email":this.email,
    "password":this.password  
  }

  this.userService.loginn(user).subscribe(resp=>{
    let token = resp.data.token;

    localStorage.setItem("token",token);

    let token2 = localStorage.getItem("token");

    console.log(resp);
    alert(resp.msg)

    
    this.router.navigateByUrl("/admindashboard")
  },error=>{
    console.log(error);
    alert(error.error.msg)
  })

 }
}
