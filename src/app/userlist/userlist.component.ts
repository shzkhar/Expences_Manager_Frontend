import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {
  constructor(private userService:UserService){}

  userlist = []
  
  ngOnInit(){
    this.userService.getAllUserr().subscribe(resp=>{
      console.log(resp)
      this.userlist = resp.data
    })
  }
  
  deleteUser(uid:any){
    console.log("VendorId=>"+uid);
    this.userService.deleteUserByIdd(uid).subscribe(resp=>{
  
     this.userlist=this.userlist.filter(user=> user['id'] != uid);
          
     
    })  
  }
}
