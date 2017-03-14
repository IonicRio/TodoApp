import { Component } from '@angular/core';

/*
  Generated class for the AddTodo component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'add-todo',
  templateUrl: 'add-todo.html'
})
export class AddTodoComponent {

  text: string;

  constructor() {
    console.log('Hello AddTodo Component');
    this.text = 'Hello World';
  }

}
