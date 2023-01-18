import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../home/newsapiservices.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit{

  technewsDisplay:any=[]

  constructor(private service:NewsapiservicesService){}

  ngOnInit(): void {
    this.service.techNews().subscribe((result)=>{
      this.technewsDisplay=result.articles      
    })
  }

}
