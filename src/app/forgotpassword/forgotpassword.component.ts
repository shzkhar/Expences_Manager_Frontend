import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {
email = "";


constructor(private userService:UserService, private router:Router){}

forgotpassword(){

  console.log(this.email);

    this.userService.forgotPassword(this.email).subscribe({
      next: (response) => {
        if(response.data != null){
          console.log(response);
          alert(response.msg);
          this.router.navigateByUrl("/resetpassword");
        }
        else{
          console.log(response);
          alert(response.msg);
        }
      }
    })
  
}

 

}
