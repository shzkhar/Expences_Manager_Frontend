import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent {
constructor(private userService:UserService){}

categorylist = []

ngOnInit(){
  this.userService.getAllCategory().subscribe(resp=>{
    console.log(resp)
    this.categorylist = resp.data
  })
}

deleteCategory(id:any){
  console.log("CategoryId=>"+id);
  this.userService.deleteCategoryById(id).subscribe(resp=>{

   this.categorylist=this.categorylist.filter(category=> category['categoryid'] != id);
        
   
  })  
}
}
