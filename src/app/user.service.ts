import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  signUpp(user:any):Observable<any>{
    let url=environment.apiUrl+"/user/create"
    let hdr = "hello";
    return this.http.post(url, user, {
      headers: {
        header:hdr
      }
    });
    // return this.http.post(environment.apiUrl+"/signUp",user)
}

loginn(user:any):Observable<any>{
  return this.http.post(environment.apiUrl+"/login",user)
}

public forgotPassword(email: any):Observable<any>{
  return this.http.get(environment.apiUrl+'/forgotPassword/?email='+email);
}
public resetPassword(otp:any, password:any, conformpassword:any):Observable<any>{
  return this.http.get(environment.apiUrl+'/resetPassword/?otp='+otp+'&password='+password+'&conformpassword='+conformpassword);
}

public addCategoryy(user:any):Observable<any>{
  let url = "http://localhost:9999/addCategory"
  return this.http.post(url,user)
}

public getAllCategory():Observable<any>{
  return this.http.get(environment.apiUrl+"/getAllCategory")
}

public deleteCategoryById(id:any):Observable<any>{
  return this.http.delete(environment.apiUrl+"/deleteCategoryById/"+id)
}
}
