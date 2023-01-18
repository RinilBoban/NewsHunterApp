import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../home/newsapiservices.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  searchNewsDisplay:any=[]
  constructor(private service:NewsapiservicesService){}

  ngOnInit(): void {
    this.service.searchNews().subscribe((result)=>{
      console.log(result);      
      this.searchNewsDisplay=result.articles
    })
  }

}
