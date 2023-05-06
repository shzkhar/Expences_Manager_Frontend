import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addvendor',
  templateUrl: './addvendor.component.html',
  styleUrls: ['./addvendor.component.css']
})
export class AddvendorComponent {
  addvendor = "";

  constructor(private userSevice:UserService, private router:Router){}

  addVendor(){
    console.log(this.addvendor);

    let vendor = {
           "vendorname":this.addvendor
    }

    this.userSevice.addVendorr(vendor).subscribe(resp=>{
      console.log(resp)
      alert(resp.msg)

      this.router.navigateByUrl("/vendorlist");
    },error=>{
      console.log(error);
      alert(error.error.msg)
    })
  }
}
