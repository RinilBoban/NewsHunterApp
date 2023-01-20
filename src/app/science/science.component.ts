import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../home/newsapiservices.service';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit{

  scienceNewsDisplay:any=[]
  modi:any

  constructor(private service:NewsapiservicesService, private ds:DataserviceService){}

  ngOnInit(): void {
    this.service.scienceNews().subscribe((result)=>{
      this.scienceNewsDisplay=result.articles
    })    
    this.modi=0
  }
  addTo(index:any,tit:any,des:any){
    tit=this.scienceNewsDisplay[index].title
    des=this.scienceNewsDisplay[index].description
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
