import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../home/newsapiservices.service';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit{

  technewsDisplay:any=[]
  modi:any

  constructor(private service:NewsapiservicesService, private ds:DataserviceService){}

  ngOnInit(): void {
    this.service.techNews().subscribe((result)=>{
      this.technewsDisplay=result.articles      
    })
    this.modi=0
  }
  addTo(index:any,tit:any,des:any){
    tit=this.technewsDisplay[index].title
    des=this.technewsDisplay[index].description
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
