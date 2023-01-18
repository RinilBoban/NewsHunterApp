import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../home/newsapiservices.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit{

  healthnewsDisplay:any=[]

  constructor(private service:NewsapiservicesService){}

  ngOnInit(): void {
    this.service.healthNews().subscribe((result)=>{
      this.healthnewsDisplay=result.articles
    })
    
  }

}
