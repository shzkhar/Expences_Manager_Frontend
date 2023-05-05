import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent {
  addcategory= "";

  constructor(private userService:UserService, private router:Router){}

  addCategory(){
    console.log(this.addCategory)

    let category = {
       "categoryname":this.addcategory
    }

    this.userService.addCategoryy(category).subscribe(resp=>{
      console.log(resp)
      alert(resp.msg)

      this.router.navigateByUrl("/categorylist");
    },error=>{
      console.log(error)
      alert(error.error.msg)
    })
  }
}
