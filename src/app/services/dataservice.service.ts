import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService implements OnInit{

  counter:any
  Addacno:any
  empty:any=''
  newsarray:any=[]
  newscart=new BehaviorSubject([])

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    // this.counter=JSON.parse(localStorage.getItem('clipcount')||'')
    // this.newsarray.push(this.counter)
    // this.newscart.next(this.newsarray)
  }

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

  addNews(title:any,description:any,image:any){
    this.counter=JSON.parse(localStorage.getItem('clipcount')||'')

    this.newsarray.push(title)
    this.newscart.next(this.newsarray)
    var account:any
    if(localStorage.getItem('currentacno')){
      this.Addacno=JSON.parse(localStorage.getItem('currentacno')||'')
    }  
      const clip={
      title,
      description,
      image,
      account:this.Addacno
    }
    console.log(clip);    
    // window.location.reload()
    return this.http.post('http://localhost:3000/addNews',clip)
  }

  getClips(){
    // this.newsarray.push(title)
    // this.newscart.next(this.newsarray)
    var account:any
    if(localStorage.getItem('currentacno')){
      this.Addacno=localStorage.getItem('currentacno')
    } 
    const data={
      account:this.Addacno}      
    return this.http.post('http://localhost:3000/getClips',data)
  }

  deleteclip(id:any){
    this.newsarray.splice(id,1)
    this.newscart.next(this.newsarray)
    var account:any
    var clipid:any
    if(localStorage.getItem('currentacno')){
      this.Addacno=JSON.parse(localStorage.getItem('currentacno')||'')
    }  
      const clip={
      clipid:id,
      account:this.Addacno
    }
    console.log(clip);    
    return this.http.post('http://localhost:3000/deleteclip',clip)
  }

  deleteAllClip(id:any){
    var account:any
    var clipid:any
    if(localStorage.getItem('currentacno')){
      this.Addacno=JSON.parse(localStorage.getItem('currentacno')||'')
    }  
      const clip={
      clipid:id,
      account:this.Addacno
    }
    console.log(clip);    
    return this.http.post('http://localhost:3000/deleteallclip',clip)
  }

  addpro(updp:any){
    var dp:any
    var account:any
    if(localStorage.getItem('currentacno')){
      this.Addacno=JSON.parse(localStorage.getItem('currentacno')||'')
    }  
    const data={
      dp:updp,
      account:this.Addacno
    }
    console.log(data)
    return this.http.post('http://localhost:3000/addpro',data)
  }

}
