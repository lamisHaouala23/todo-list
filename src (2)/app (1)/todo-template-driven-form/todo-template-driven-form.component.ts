import { Component,OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-template-driven-form',
  templateUrl: './todo-template-driven-form.component.html',
  styleUrls: ['./todo-template-driven-form.component.css']
})

export class TodoTemplateDrivenFormComponent implements OnInit{

todo:Todo={
      id:0,
      title:"",
      done:false,
      date:new Date(),
      description:""
}

constructor(public todoService:TodoService){}

id:number=0

ngOnInit(): void {
  this.todoService.getTodoList().subscribe(
    Response=>this.id=Response.length+1
  )
}

addTodo(){
  this.todoService.todoAddShowModal=false
  this.todoService.addTodo({...this.todo, id:this.id}).subscribe(
  Response=>window.location.reload()
  
)
}

}
