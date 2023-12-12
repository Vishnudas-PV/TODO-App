import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { myLists } from 'src/Model/myLists';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getAllLists():Observable<myLists>{
    return this.http.get('http://localhost:3000/todo')
  }

  //api call for viewing the list particularly
  viewLists(listid:string){
 return this.http.get(`http://localhost:3000/todo/${listid}`)
  }

  //api call for adding a list
  addList(listBody:any){
    return this.http.post(' http://localhost:3000/todo',listBody)

  }

  //api call for edit the given list
  updateList(listId:any,listBody:any){
   return this.http.put(`http://localhost:3000/todo/${listId}`,listBody)
  }

  //api call for deleting the particular list
  deleteList(listId:any){
 return this.http.delete(`http://localhost:3000/todo/${listId}`)
  }
}
