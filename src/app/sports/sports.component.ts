import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../home/newsapiservices.service';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit{

  sportsNewsDisplay:any=[]
  modi:any

  constructor(private service:NewsapiservicesService, private ds:DataserviceService){}

  ngOnInit(): void {
    this.service.sportsNews().subscribe((result)=>{
      this.sportsNewsDisplay=result.articles
    })
    this.modi=0
  }
  addTo(index:any,tit:any,des:any){
    tit=this.sportsNewsDisplay[index].title
    des=this.sportsNewsDisplay[index].description
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
