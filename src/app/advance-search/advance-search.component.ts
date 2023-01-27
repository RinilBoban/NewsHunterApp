import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../home/newsapiservices.service';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-advance-search',
  templateUrl: './advance-search.component.html',
  styleUrls: ['./advance-search.component.css']
})
export class AdvanceSearchComponent implements OnInit{

  advNewsDisplay:any=[]
  modi:any

  constructor(private service:NewsapiservicesService,private ds:DataserviceService){}
  
  ngOnInit(): void {
    this.service.advanceSearch().subscribe((result)=>{
      console.log(result);     
      this.advNewsDisplay=result.articles
    })
    this.modi=0
  }

  addTo(index:any,tit:any,des:any,img:any){
    tit=this.advNewsDisplay[index].title
    des=this.advNewsDisplay[index].description
    img=this.advNewsDisplay[index].urlToImage
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
