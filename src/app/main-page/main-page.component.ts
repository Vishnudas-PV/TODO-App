import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { myLists } from 'src/Model/myLists';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  implements OnInit{
  allLists:any=[];
  searchKey:string='';
constructor(private api:ApiService){}
  ngOnInit(): void {
 this.getAllLists()
  }

  getAllLists(){
    this.api.getAllLists().subscribe((data:myLists)=>{
      console.log(data);
      this.allLists=data;
    })
  }

  deleteList(listId:any){
    this.api.deleteList(listId).subscribe((result:any)=>{
      alert('Deleted Successfully');
      this.getAllLists();
    })

  }

  search(event:any){
    console.log(event);
    console.log(event.target.value);
   this.searchKey=event.target.value;
    
    
  }
}
