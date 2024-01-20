import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoTemplateDrivenFormComponent } from './todo-template-driven-form/todo-template-driven-form.component';
import { TodoReactiveFormComponent } from './todo-reactive-form/todo-reactive-form.component';
import { TodoPipe } from './todo.pipe';
import { TodoDirective } from './todo.directive';
import { HttpClientModule}from '@angular/common/http';
import { TodoUpdateComponent } from './todo-update/todo-update.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


/*// Définissez vos routes
const appRoutes: Routes = [
  { path: 'todos', component: TodoListComponent },
  { path: 'todos/:id', component: TodoDetailComponent },
  { path: 'signin', component: TodoReactiveFormComponent },
  { path: 'new', component: TodoTemplateDrivenFormComponent },
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  // Ajoutez d'autres routes si nécessaire
];*/

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    TodoListComponent,
    TodoDetailComponent,
    TodoTemplateDrivenFormComponent,
    TodoReactiveFormComponent,
    TodoPipe,
    TodoDirective,
    TodoUpdateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot([{path:'',component:TodoListComponent},
  {path:'signin',component:TodoReactiveFormComponent}]) // Ajoutez cette ligne pour le routage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
