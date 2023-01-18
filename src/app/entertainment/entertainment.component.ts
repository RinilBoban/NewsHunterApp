import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../home/newsapiservices.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit{

  entNewsDisplay:any=[]

  constructor(private service:NewsapiservicesService){}

  ngOnInit(): void {
    this.service.entertainmentNews().subscribe((result)=>{
      this.entNewsDisplay=result.articles
    })
  }
}
