import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
//service pour manipuler les formulaires
import { FormBuilder } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-todo-reactive-form',
  templateUrl: './todo-reactive-form.component.html',
  styleUrls: ['./todo-reactive-form.component.css']
})
export class TodoReactiveFormComponent {

  private _authService: any;


  constructor(private formBuilder : FormBuilder ,
              private userService : UserService,
              private router : Router){}
  
  //formBuilder va créer le formulaire dans le ts
  authForm =this.formBuilder.group(
    {
      //group pour definir et linker les champs du formulaire avec la template
      //validators pour exiger une forme precise comme les exp regurileres
      login : ['',Validators.required], 
      password : ['',Validators.required],

    }
  )

  //json reponse d'une api envoyeé au client
  checkLogin(){
    if(this.authForm.value.login && this.authForm.value.password)
    //si l'utilisateur existe avec les parametres
    this.userService.getUser(this.authForm.value.login,this.authForm.value.password).subscribe(
        result=>{
          if(result.length) //s'il ya du resultat (connexion verifiée) 
          { 
            localStorage.setItem("t",result[0].token) //afficher le token dans l'url
            this.userService.btnSignValue='Sign Out'
            this.router.navigateByUrl('') //redirectionner aprs login à la todolist
          }
          
          else 
            alert("Login ou Password incorrects!")
        }
    )
  }
}
