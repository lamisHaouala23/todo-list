import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoDetailShowModal=false
  todoUpdateShowModal=false
  todoAddShowModal=false
  
  
  constructor(private httpCLient : HttpClient) { }

  //recuperer les données du todos à partir du fichier db.json (localhost:3000)
  getTodoList():Observable<Todo[]>{
    return this.httpCLient.get<Todo[]>("http://localhost:3000/todos")
  }

  //recuperer un todo en utilisant son id fourni en parametre
  getTodoByid(todo:Todo):Observable<Todo>{
    return this.httpCLient.get<Todo>(`http://localhost:3000/todos/${todo.id}`)
    }

  //supprimer un todo par son parametre   
  deleteTodo(todo:Todo):Observable<Todo[]>{
  return this.httpCLient.delete<Todo[]>(`http://localhost:3000/todos/${todo.id}`)
  }
  
  //faire la MAJ d'une task 
  //put prend 2 parametres (l'url,l'objet en question de MAJ)
  updateTodo(todo:Todo):Observable<Todo>{
    return this.httpCLient.put<Todo>(`http://localhost:3000/todos/${todo.id}`,todo)
  }


  //pour ajouter un todo à la liste des todos
  addTodo(todo:Todo):Observable<Todo[]>{
    return this.httpCLient.post<Todo[]>(`http://localhost:3000/todos`,todo)
  }

}
