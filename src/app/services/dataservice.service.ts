import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  Addacno:any
  empty:any=''

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

  addNews(title:any,description:any){
    var account:any
    if(localStorage.getItem('currentacno')){
      this.Addacno=JSON.parse(localStorage.getItem('currentacno')||'')
    }  
      const clip={
      title,
      description,
      account:this.Addacno
    }
    console.log(clip);    
    return this.http.post('http://localhost:3000/addNews',clip)
  }

  getClips(){
    var account:any
    if(localStorage.getItem('currentacno')){
      this.Addacno=localStorage.getItem('currentacno')
    } 
    const data={
      account:this.Addacno}      
    return this.http.post('http://localhost:3000/getClips',data)
  }

  // deleteclip(id:any){
  //   var data:any
  //   data=JSON.parse(id)
  //   return this.http.post('http://localhost:3000/deleteclip',data)
  // }
  deleteclip(id:any){
    return this.http.delete('http://localhost:3000/deleteclip/'+id)
  }

  deleteAllClip(){
    var sender:any
    const datasender={
      sender:this.empty
    }
    return this.http.delete('http://localhost:3000/deleteallclip')
  }

}
