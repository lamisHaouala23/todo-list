import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { pipe } from 'rxjs';
import { map , filter} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient : HttpClient ) {}

  //le bouton qui recoit sign in ou sign out
  btnSignValue: string='';


  getUser(login:string,password:string): Observable<User[]>{


      let params=new HttpParams()
      .set("login" , login)
      .set("password" , password)

      return this.httpClient.get<User[]>(`http://localhost:3000/users`,{params})

  }
}
