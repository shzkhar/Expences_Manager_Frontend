import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addsubcategory',
  templateUrl: './addsubcategory.component.html',
  styleUrls: ['./addsubcategory.component.css']
})
export class AddsubcategoryComponent {
  addsubcategory = "";

  constructor(private userSevice:UserService, private router:Router){}

  addSubCategory(){
    console.log(this.addsubcategory);

    let subCategory = {
           "subcategoryname":this.addsubcategory
    }

    this.userSevice.addSubCategoryy(subCategory).subscribe(resp=>{
      console.log(resp)
      alert(resp.msg)

      this.router.navigateByUrl("/subcategorylist");
    },error=>{
      console.log(error);
      alert(error.error.msg)
    })
  }
}
