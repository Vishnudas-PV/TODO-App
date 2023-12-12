import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes'
})
export class PipesPipe implements PipeTransform {
  

  transform(allLists:any[],searchTerm:string,propsName:string): any[] {
    
      const lists:any[]=[];
      if(!allLists || searchTerm=='' || propsName==''){
        return allLists;
      }
      allLists.forEach((list:any)=>{
        if(list[propsName].trim().toLowerCase().includes(searchTerm.trim().toLowerCase())){
          lists.push(list)
        }
  })
    return lists;
  }

}
