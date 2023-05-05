import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
firstname = "";
lastname  = "";
email = ""; 
mobno = "";
password = "";   

constructor(private userService:UserService, private router:Router){}


signUp(){
console.log(this.firstname);
console.log(this.lastname);
console.log(this.mobno);
console.log(this.password);
console.log(this.email);

let user = {
            "firstname":this.firstname,
            "lastname":this.lastname,
            "email":this.email,
            "mobno":this.mobno,
            "password":this.password  
          }

          this.userService.signUpp(user).subscribe(resp=>{
            console.log(resp);
            alert(resp.msg)
            this.router.navigateByUrl("/login");
          },error=>{
            console.log(error)
            alert(error.error.msg)
          })
         
}
}
