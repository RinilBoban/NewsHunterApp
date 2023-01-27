import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../home/newsapiservices.service';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  searchNewsDisplay:any=[]
  modi:any

  constructor(private service:NewsapiservicesService, private ds:DataserviceService){}

  ngOnInit(): void {
    this.service.searchNews().subscribe((result)=>{
      console.log(result);      
      this.searchNewsDisplay=result.articles
    })
    this.modi=0
  }
  addTo(index:any,tit:any,des:any,img:any){
    tit=this.searchNewsDisplay[index].title
    des=this.searchNewsDisplay[index].description
    img=this.searchNewsDisplay[index].urlToImage
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
