import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http:HttpClient) { }

  register(acno:any,username:any,password:any){
    
    const data={
      acno,
      username,
      password
    }
    return this.http.post('http://localhost:3000/register',data)
  }

  login(acno:any,password:any){
    const data = {
      acno,
      password
    }
    return this.http.post('http://localhost:3000/login',data)
  }
}
