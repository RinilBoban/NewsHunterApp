import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../home/newsapiservices.service';

@Component({
  selector: 'app-advance-search',
  templateUrl: './advance-search.component.html',
  styleUrls: ['./advance-search.component.css']
})
export class AdvanceSearchComponent implements OnInit{

  advNewsDisplay:any=[]

  constructor(private service:NewsapiservicesService){}
  
  ngOnInit(): void {
    this.service.advanceSearch().subscribe((result)=>{
      console.log(result);     
      this.advNewsDisplay=result.articles
    })
  }

}
