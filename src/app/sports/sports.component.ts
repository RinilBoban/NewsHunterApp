import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../home/newsapiservices.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit{

  sportsNewsDisplay:any=[]

  constructor(private service:NewsapiservicesService){}

  ngOnInit(): void {
    this.service.sportsNews().subscribe((result)=>{
      this.sportsNewsDisplay=result.articles
    })
  }

}
