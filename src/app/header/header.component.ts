import { Component, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewsapiservicesService } from '../home/newsapiservices.service';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  user:any
  i:any
  enterNews:any
  radio:any
  da1:any
  da2:any
  anews:any
  lang:any

  constructor(private services:NewsapiservicesService, private router:Router, private fb:FormBuilder, private ds:DataserviceService){
    if(localStorage.getItem('currentuser')){
      this.user=JSON.parse(localStorage.getItem('currentuser')||'')
    }  
  }

  loginForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    psw:['',[Validators.required,Validators.pattern('[0-9]+')]]  
  })

  registerForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    psw:['',[Validators.required,Validators.pattern('[0-9]+')]]  
  })

  login(){
    var uname=this.loginForm.value.acno
    var psw=this.loginForm.value.psw

    if(this.loginForm.valid){
      this.ds.login(uname,psw)
      .subscribe((result:any)=>{
        localStorage.setItem('currentuser',JSON.stringify(result.currentUser))
        localStorage.setItem('currentacno',JSON.stringify(result.currentAcno))
        alert(result.message);
        window.location.reload()
        this.router.navigateByUrl('')
      },
      (result:any)=>{
        alert(result.error.message)
      }
      )
    }
    else{
      alert('Invalid form')
    }
  }

  register(){
    var uname=this.registerForm.value.uname
    var acno=this.registerForm.value.acno
    var psw=this.registerForm.value.psw

    if(this.registerForm.valid){
      this.ds.register(acno,uname,psw)
      .subscribe((result:any)=>{
        alert(result.message);
        this.router.navigateByUrl('login')
      })
    }
    else{
      alert('Invalid form')
    }
  }
  logout(){
    localStorage.removeItem('currentuser')
    localStorage.removeItem('currentacno')
    window.location.reload()
  }

  search(term:any){    
    let finder=term.value
    this.services.searchbox(finder)
    this.router.navigateByUrl('search')
    this.enterNews=""
  }

  domain1(){
    this.radio='bbc.com'
  }

  domain2(){
    this.radio='washingtonpost.com'
  }

  domain3(){
    this.radio='cnn.com'
  }

  domain4(){
    this.radio='msn.com'
  }
  language1(){
    this.lang='popularity'
  }
  language2(){
    this.lang='relevancy'
  }
  language3(){
    this.lang='publishedAt'
  }

  advanced(term:any,date1:any,date2:any){
    this.anews=term.value
    this.da1=date1.value
    this.da2=date2.value       
    this.services.advanceSearchBox(this.anews,date1,date2,this.radio,this.lang)
    this.router.navigateByUrl('advancedSearch')
    
  }
}

 