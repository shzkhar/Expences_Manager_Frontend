import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AdmindashboarComponent } from './admindashboar/admindashboar.component';

import { AddcategoryComponent } from './addcategory/addcategory.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { AddsubcategoryComponent } from './addsubcategory/addsubcategory.component';
import { SubcategorylistComponent } from './subcategorylist/subcategorylist.component';
import { AddvendorComponent } from './addvendor/addvendor.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    ForgotpasswordComponent,
    ResetPasswordComponent,
    AdmindashboarComponent,
    AddcategoryComponent,
    CategorylistComponent,
    AddsubcategoryComponent,
    SubcategorylistComponent,
    AddvendorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
