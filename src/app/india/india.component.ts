import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../home/newsapiservices.service';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css']
})
export class IndiaComponent implements OnInit{

  indiaNewsDisplay:any=[]
  modi:any

  constructor(private service:NewsapiservicesService, private ds:DataserviceService){}

  ngOnInit(): void {
    this.service.indiaNews().subscribe((result)=>{
      this.indiaNewsDisplay=result.articles
    })
    this.modi=0
  }
  addTo(index:any,tit:any,des:any){
    tit=this.indiaNewsDisplay[index].title
    des=this.indiaNewsDisplay[index].description
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
