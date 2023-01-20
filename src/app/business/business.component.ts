import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../home/newsapiservices.service';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit{

  busNewsDisplay:any=[]
  modi:any

  constructor(private service:NewsapiservicesService, private ds:DataserviceService){}

  ngOnInit(): void {
    this.service.businessNews().subscribe((result)=>{
      this.busNewsDisplay=result.articles
    })
    this.modi=0
  }
  addTo(index:any,tit:any,des:any){
    tit=this.busNewsDisplay[index].title
    des=this.busNewsDisplay[index].description
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
