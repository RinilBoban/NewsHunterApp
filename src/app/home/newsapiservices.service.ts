import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  findnews:any
  findadvnews:any
  advNews:any
  advDateFrom:any
  advDateTo:any
  advDom:any
  advDateLang:any
  advLang:any
  
  constructor(private http:HttpClient) { }

  //health api url
  healthApiUrl="https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=f4f2f00c1afa486985f6d08596b38f21"

  //science api url
  scienceApiUrl="https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=f4f2f00c1afa486985f6d08596b38f21"

  //entertainment api url
  entApiUrl="https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=f4f2f00c1afa486985f6d08596b38f21"

  //business api url
  businessApiUrl="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f4f2f00c1afa486985f6d08596b38f21"

  //sportsnews api url
  sportsApiUrl="https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=f4f2f00c1afa486985f6d08596b38f21"

  //technews api url
  techApiUrl="https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=f4f2f00c1afa486985f6d08596b38f21"

    //news api url
  INnewsApiUrl="https://newsapi.org/v2/top-headlines?country=in&apiKey=f4f2f00c1afa486985f6d08596b38f21"

  //news api url
  newsApiUrl="https://newsapi.org/v2/top-headlines?country=us&apiKey=f4f2f00c1afa486985f6d08596b38f21"
  // newsApiUrl="https://newsappi.org/v2/top-headlines?country=us&apiKey=f4f2f00c1afa486985f6d08596b3NOGO"

  //search news api url
  // searchApiUrl=`https://newsapi.org/v2/everything?q=${this.finder}&apiKey=f4f2f00c1afa486985f6d08596b38f21`

  topHeading():Observable<any>
  {
    return this.http.get(this.newsApiUrl)
  }
  indiaNews():Observable<any>
  {
    return this.http.get(this.INnewsApiUrl)
  }
  techNews():Observable<any>
  {
    return this.http.get(this.techApiUrl)
  }
  sportsNews():Observable<any>
  {
    return this.http.get(this.sportsApiUrl)
  }
  businessNews():Observable<any>
  {
    return this.http.get(this.businessApiUrl)
  }
  entertainmentNews():Observable<any>
  {
    return this.http.get(this.entApiUrl)
  }
  scienceNews():Observable<any>
  {
    return this.http.get(this.scienceApiUrl)
  }
  healthNews():Observable<any>
  {
    return this.http.get(this.healthApiUrl)
  }
  searchbox(item:String){
    this.findnews=item
  }
  searchNews():Observable<any>
  {   
    return this.http.get(`https://newsapi.org/v2/everything?q=${this.findnews}&apiKey=f4f2f00c1afa486985f6d08596b38f21`)
  }
  advanceSearchBox(items:any,dat1:any,dat2:any,source:any,languag:any){
    this.findadvnews=items
    this.advDateFrom=dat1.value
    this.advDateTo=dat2.value
    this.advDom=source
    this.advLang=languag
    console.log('In service')
    // console.log(this.findadvnews)
    // console.log(this.advDateFrom);
    // console.log(this.advDateTo);   
    console.log(this.advLang)
  }
  advanceSearch():Observable<any>
  {
    return this.http.get(`https://newsapi.org/v2/everything?q=${this.findadvnews}&sortBy=${this.advLang}&from=${this.advDateFrom}&to=${this.advDateTo}&domains=${this.advDom}&apiKey=f4f2f00c1afa486985f6d08596b38f21`)

    // return this.http.get(`https://newsapi.org/v2/everything?q=${this.findadvnews}&domains=${this.advDom}&apiKey=f4f2f00c1afa486985f6d08596b38f21`)
  }
}
