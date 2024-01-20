import { Component, OnInit } from '@angular/core';
import { faTrash, faList, faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit{
faT =faTrash
faL = faList
faP = faPenToSquare

todoList!:Todo[] //la liste des todos

constructor (public todoService : TodoService, 
              private router:Router){}


//charger la liste des todos à partir du service
ngOnInit(): void {
  this.todoService.getTodoList().subscribe(
    response => this.todoList=response
  )
  if(!localStorage.getItem("t"))
  this.router.navigateByUrl('signin')
}

deleteTodo(todo:Todo){

  this.todoService.deleteTodo(todo).subscribe(
    response=>{
      this.todoList=response
      this.ngOnInit()
    }
  )
}

selectedTodo!:Todo

selectTodo(todo:Todo){
  
  this.todoService.getTodoByid(todo).subscribe(
    response=>this.selectedTodo=response
  )
}

}