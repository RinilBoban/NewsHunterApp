import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { NewsapiservicesService } from '../newsapiservices.service';

@Component({
  selector: 'app-topnews',
  templateUrl: './topnews.component.html',
  styleUrls: ['./topnews.component.css']
})
export class TopnewsComponent implements OnInit{

  topheadingDisplay:any=[]
  addTitle:any
  addDes:any
  modi:any


  constructor(private services:NewsapiservicesService, private ds:DataserviceService){}

  ngOnInit(): void {    
      this.services.topHeading().subscribe((result)=>{
        console.log(result);
        this.topheadingDisplay=result.articles
      })    
      this.modi=0
  }

  addTo(index:any,tit:any,des:any){
    tit=this.topheadingDisplay[index].title
    des=this.topheadingDisplay[index].description
    console.log(tit);
    console.log(des);
    this.ds.addNews(tit,des)
    .subscribe((result:any)=>{
      alert(result.message)
    },
    result=>{
      alert(result.error.message)
    } 
    )
  }
  modalAct(index:any){
    this.modi=index
  }
}
