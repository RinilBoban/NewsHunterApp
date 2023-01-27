import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../home/newsapiservices.service';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit{

  entNewsDisplay:any=[]
  modi:any

  constructor(private service:NewsapiservicesService, private ds:DataserviceService){}

  ngOnInit(): void {
    this.service.entertainmentNews().subscribe((result)=>{
      this.entNewsDisplay=result.articles
    })
    this.modi=0
  }
  addTo(index:any,tit:any,des:any,img:any){
    tit=this.entNewsDisplay[index].title
    des=this.entNewsDisplay[index].description
    img=this.entNewsDisplay[index].urlToImage
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
