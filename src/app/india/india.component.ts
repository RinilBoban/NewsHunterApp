import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../home/newsapiservices.service';

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css']
})
export class IndiaComponent implements OnInit{

  indiaNewsDisplay:any=[]

  constructor(private service:NewsapiservicesService){}

  ngOnInit(): void {
    this.service.indiaNews().subscribe((result)=>{
      this.indiaNewsDisplay=result.articles
    })
  }

}
