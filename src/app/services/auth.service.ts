import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
isLoginSubject = new BehaviorSubject<boolean>(false);
baseURL= environment.baseURL

constructor(public http:HttpClient) { }
  


    login(data)
    {
       return this.http.post(this.baseURL + '/user/login', data)
    }
  
    register(data)
    {
      return this.http.post( this.baseURL + '/user/register',data)
    }


}