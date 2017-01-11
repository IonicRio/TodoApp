import { AboutPage } from './../about/about';
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
    this.todoService.get(true).subscribe(
      data => {
        this.tasks = data;
      },
      err => {
        console.log(err);
      }
    );
  }

}
