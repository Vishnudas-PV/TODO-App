import { Component } from '@angular/core';
import { myLists } from 'src/Model/myLists';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent {
list:myLists={}

constructor(private api:ApiService, private router:Router){}

addList(){
  this.api.addList(this.list).subscribe((result:any)=>{
    this.router.navigateByUrl('');
  })
}
}
