import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css']
})
export class ViewPageComponent implements OnInit {
  loginDate:any=''
  listid:string='';
 
  list:any=[];
  constructor(private activatedRoute:ActivatedRoute, private api:ApiService){}
 
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data);
      this.listid=data.id;
      console.log(this.listid);
      this.loginDate=new Date();
      

      this.api.viewLists(this.listid).subscribe((result:any)=>{
        console.log(result);
        this.list=result;
        
      })
    })
  }

}
