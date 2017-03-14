import { AddTodoComponent } from './../../components/add-todo/add-todo';
import { ModalController } from 'ionic-angular/es2015';
import { Todo } from './../../providers/todo';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Todo]
})
export class HomePage {
  public tasks;
  constructor(public navCtrl: NavController, public todoService: Todo, public ModalController: ModalController) {

  }

  ionViewDidLoad() {
    this.todoService.get(true).subscribe(
      data => {
        this.tasks = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  openAddTodoForm() {
    let modal = this.ModalController.create(AddTodoComponent);
    modal.present();
  }

  deleteTodo(id) {

  }

}
