import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Todo provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Todo {
  constructor(public http: Http) {
    console.log('Hello Todo Provider');
  }

  get(status:boolean = true) {
    let todosUrl =  'http://localhost:3000/todos?isActive=' + status;
    return this.http.get(todosUrl)
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json.error));
  }
}
