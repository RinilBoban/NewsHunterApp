import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../newsapiservices.service';

@Component({
  selector: 'app-topnews',
  templateUrl: './topnews.component.html',
  styleUrls: ['./topnews.component.css']
})
export class TopnewsComponent implements OnInit{

  topheadingDisplay:any=[]

  constructor(private services:NewsapiservicesService){}

  ngOnInit(): void {    
      this.services.topHeading().subscribe((result)=>{
        console.log(result);
        this.topheadingDisplay=result.articles
      })    
  }

  // india(){
  //   this.services.indiaNews().subscribe((result)=>{
  //     this.topheadingDisplay=result.articles
  //   })
  // }

}
