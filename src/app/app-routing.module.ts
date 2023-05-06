import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AdmindashboarComponent } from './admindashboar/admindashboar.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { AddsubcategoryComponent } from './addsubcategory/addsubcategory.component';
import { SubcategorylistComponent } from './subcategorylist/subcategorylist.component';
import { AddvendorComponent } from './addvendor/addvendor.component';
import { VendorlistComponent } from './vendorlist/vendorlist.component';

const routes: Routes = [
  {
    component:SignUpComponent,
    path:"signup"
  },
  {
    component:SignUpComponent,
    path:""
  },
  {
    component:LoginComponent,
    path:"login"
  },
  {
    component:ForgotpasswordComponent,
    path:"forgotpassword"
  },
  {
    component:ResetPasswordComponent,
    path:"resetpassword"
  },
  {
    component:AdmindashboarComponent,
    path:"admindashboard"
  },
  {
    component:AddcategoryComponent,
    path:"addcategory"
  },
  {
    component:CategorylistComponent,
    path:"categorylist"
  },
  {
    component:AddsubcategoryComponent,
    path:"addsubcategory"
  },
  {
    component:SubcategorylistComponent,
    path:"subcategorylist"
  },
  {
    component:AddvendorComponent,
    path:"addvendor"
  },
  {
    component:VendorlistComponent,
    path:"vendorlist"
  }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
