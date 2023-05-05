import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  otp:Number=0;
  password="";
  conformpassword="";
  constructor(private userService:UserService, private router:Router){}
  resetPassword()
  {
    this.userService .resetPassword(this.otp, this.password, this.conformpassword).subscribe({
      next: (resp) => {
        if(resp.data != null)
        {
          console.log(resp.msg);
          alert(resp.msg);
          this.router.navigateByUrl("/login")
        }
        else
        {
          console.log(resp.msg);
          alert(resp.msg);
        }
      }
    })
  }
}
