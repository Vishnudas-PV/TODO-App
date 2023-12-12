import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { myLists } from 'src/Model/myLists';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {
  listId:string='';
  list:myLists={}
  constructor(private activatedRoute:ActivatedRoute, private api:ApiService,private route:Router){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data);
      console.log(data.editTodoid);
      this.listId=data.editTodoid;
      

      this.api.viewLists(this.listId).subscribe((result:any)=>{
        console.log(result);
        this.list=result;
        
      })
      
    })
  }

  updateList(){
    this.api.updateList(this.listId,this.list).subscribe((result:any)=>{
      console.log(result);
      this.route.navigateByUrl('/')
    })
  }

}
