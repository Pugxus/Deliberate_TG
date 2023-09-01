import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }

  getUserData(username: any,password: any){
    return this.http.get<any>('http://localhost:4200/user/' + username + '/' + password);
  }
}
