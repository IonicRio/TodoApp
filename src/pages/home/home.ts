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
  constructor(public navCtrl: NavController, public todoService: Todo) {

  }

  ionViewDidLoad() {
    this.tasks = this.todoService.list();
  }

}
