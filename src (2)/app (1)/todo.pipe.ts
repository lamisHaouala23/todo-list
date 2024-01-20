import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo';

@Pipe({
  name: 'todoPipe'
})
export class TodoPipe implements PipeTransform {

    transform(todo:Todo): string {

    let myClass:string='todo' 
    let today = new Date //date du jour
    let todoDate = new Date(todo.date) //la date de planification du task

    
    if(todoDate.getTime()-today.getTime()<= 2*3600*1000) //calculer la diff entre date aujourd'hui et date du task
    myClass+='border border-danger border-2' //classes bootstrap
    
    return myClass;
  }

}
