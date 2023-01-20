import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.component.html',
  styleUrls: ['./clipboard.component.css']
})
export class ClipboardComponent implements OnInit{

  clipNewsDisplay:any
  emsg:any

  constructor(private ds:DataserviceService, private router:Router){}

  ngOnInit(): void {
    this.ds.getClips().subscribe(
      (data:any)=>{
        console.log(data)        
        this.clipNewsDisplay=data.clipnews              
        if(this.clipNewsDisplay.length==0){
          this.emsg='Empty Wishlist'
        }
      },
      (data:any)=>{
        this.emsg=data.error.message
      }
    )
  }

  delete(id:any){
    this.ds.deleteclip(id).subscribe(
      (result:any)=>{
        alert(result.message)
        this.router.navigateByUrl('clipboard')
        this.clipNewsDisplay=result.wishlist
        if(this.clipNewsDisplay.length==0){
          this.emsg='Empty Wishlist'
        }
        // window.location.reload()
      },
      (result:any)=>{
        alert(result.error.message)
      }
    )
  }

  deleteAll(){
    this.ds.deleteAllClip().subscribe(
      (result:any)=>{
        alert(result.message)
        this.router.navigateByUrl('clipboard')
        this.clipNewsDisplay=result.wishlist
        if(this.clipNewsDisplay.length==0){
          this.emsg='Empty Wishlist'
        }
      },
      (result:any)=>{
        alert(result.error.message)
      }
    )
  }

}