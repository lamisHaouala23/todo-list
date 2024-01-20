import { Component, Input } from '@angular/core';
import { Todo } from '../todo';
import { faCheck} from '@fortawesome/free-solid-svg-icons';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})

export class TodoDetailComponent {

  faC=faCheck

constructor(public todoService:TodoService){}

  @Input() todo!:Todo


updateDoneTodo(todo:Todo){
  //mettre à jour la situation done ou non d'un todo
  
  todo.done=!todo.done
  this.todoService.updateTodo(todo).subscribe(
    response => this.todo =response
  )
} 
}
