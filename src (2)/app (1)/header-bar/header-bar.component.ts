import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent {


  constructor(public todoService:TodoService,
              public _authService: UserService, 
              private router : Router){
                //si on a un token sign in va recevoir sign in si non sign out
                localStorage.getItem("token")? //pour obtenir le token on utilise get item
                this._authService.btnSignValue='Sign In': //si le token existe(on est connecté)
                this._authService.btnSignValue='Sign In'  //si non
              }

  signOut(){
    localStorage.removeItem("t")
    window.location.reload()
    this.router.navigateByUrl('/signin')
  }
}
