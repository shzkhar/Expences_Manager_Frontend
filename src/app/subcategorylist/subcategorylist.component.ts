import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-subcategorylist',
  templateUrl: './subcategorylist.component.html',
  styleUrls: ['./subcategorylist.component.css']
})
export class SubcategorylistComponent {
  constructor(private userService:UserService){}

  subcategorylist = []
  
  ngOnInit(){
    this.userService.getAllSubCategory().subscribe(resp=>{
      console.log(resp)
      this.subcategorylist = resp.data
    })
  }
  
  deleteSubCategory(id:any){
    console.log("SubCategoryId=>"+id);
    this.userService.deleteSubCategoryByIdd(id).subscribe(resp=>{
  
     this.subcategorylist=this.subcategorylist.filter(subcategory=> subcategory['subcategoryid'] != id);
          
     
    })  
  }
}
