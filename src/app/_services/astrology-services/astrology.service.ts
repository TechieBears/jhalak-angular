import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AstrologyService {

  urlBase=environment.production
  constructor(private http:HttpClient) { }

  astrology='http://localhost:3000'
 
  public getAllAstrologyData(astrology:any){
    this.http.get(this.urlBase+this.astrology);
  }
}
