import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../home/newsapiservices.service';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit{

  healthnewsDisplay:any=[]
  modi:any

  constructor(private service:NewsapiservicesService, private ds:DataserviceService){}

  ngOnInit(): void {
    this.service.healthNews().subscribe((result)=>{
      this.healthnewsDisplay=result.articles
    })
    this.modi=0
  }
  addTo(index:any,tit:any,des:any,img:any){
    tit=this.healthnewsDisplay[index].title
    des=this.healthnewsDisplay[index].description
    img=this.healthnewsDisplay[index].urlToImage
    console.log(tit);
    console.log(des);
    this.ds.addNews(tit,des,img)
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
