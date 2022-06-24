import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  urlBase=environment.production
  requestHeader = new HttpHeaders(
    { "No-Auth": "True" }
  );
  constructor(private httpclient:HttpClient) { }

  
  public login(loginData: any) {
    return this.httpclient.post(this.urlBase + "users/authenticate", loginData, { headers: this.requestHeader })

  }

  public register(registerData: any) {
    return this.httpclient.post(this.urlBase + "users/register", registerData, { headers: this.requestHeader });
  }

}
