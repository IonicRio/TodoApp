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

  list() {
    return [
      {
        "id": "587530800af3ce7087ae521c",
        "text": "ut do laboris officia",
        "isCompleted": false,
        "createdAt": "Thursday, August 13, 2015 12:47 PM",
        "user": {
          "name": "Jones",
          "surname": "Castaneda",
          "photo": "http://placehold.it/100x100"
        }
      },
      {
        "id": "58753080f810751b4dab5333",
        "text": "Lorem laboris duis ut",
        "isCompleted": false,
        "createdAt": "Sunday, August 30, 2015 2:55 PM",
        "user": {
          "name": "Joanne",
          "surname": "Pierce",
          "photo": "http://placehold.it/100x100"
        }
      },
      {
        "id": "58753080983b0701e8db43ff",
        "text": "eiusmod elit officia adipisicing",
        "isCompleted": false,
        "createdAt": "Saturday, April 11, 2015 2:57 PM",
        "user": {
          "name": "April",
          "surname": "Maddox",
          "photo": "http://placehold.it/100x100"
        }
      },
      {
        "id": "58753080d109f9bd3416fa01",
        "text": "proident ipsum anim amet",
        "isCompleted": false,
        "createdAt": "Saturday, November 29, 2014 12:00 AM",
        "user": {
          "name": "Ebony",
          "surname": "Gibson",
          "photo": "http://placehold.it/100x100"
        }
      },
      {
        "id": "5875308000df6d9336c39bd3",
        "text": "commodo officia ullamco nisi",
        "isCompleted": true,
        "createdAt": "Sunday, August 10, 2014 7:49 AM",
        "user": {
          "name": "Robles",
          "surname": "Compton",
          "photo": "http://placehold.it/100x100"
        }
      },
      {
        "id": "587530806f2eba950db809e7",
        "text": "commodo voluptate enim velit",
        "isCompleted": false,
        "createdAt": "Saturday, October 8, 2016 8:53 PM",
        "user": {
          "name": "Lester",
          "surname": "Wolf",
          "photo": "http://placehold.it/100x100"
        }
      },
      {
        "id": "58753080370051340a88d10b",
        "text": "cupidatat exercitation duis ut",
        "isCompleted": true,
        "createdAt": "Tuesday, December 15, 2015 12:14 PM",
        "user": {
          "name": "Benson",
          "surname": "Hurst",
          "photo": "http://placehold.it/100x100"
        }
      },
      {
        "id": "5875308059be72c9f5f76289",
        "text": "nisi occaecat non elit",
        "isCompleted": true,
        "createdAt": "Monday, November 21, 2016 11:42 AM",
        "user": {
          "name": "Aguilar",
          "surname": "Hamilton",
          "photo": "http://placehold.it/100x100"
        }
      },
      {
        "id": "587530800af3ce7087ae521c",
        "text": "ut do laboris officia",
        "isCompleted": false,
        "createdAt": "Thursday, August 13, 2015 12:47 PM",
        "user": {
          "name": "Jones",
          "surname": "Castaneda",
          "photo": "http://placehold.it/100x100"
        }
      },
      {
        "id": "58753080f810751b4dab5333",
        "text": "Lorem laboris duis ut",
        "isCompleted": false,
        "createdAt": "Sunday, August 30, 2015 2:55 PM",
        "user": {
          "name": "Joanne",
          "surname": "Pierce",
          "photo": "http://placehold.it/100x100"
        }
      },
      {
        "id": "58753080983b0701e8db43ff",
        "text": "eiusmod elit officia adipisicing",
        "isCompleted": false,
        "createdAt": "Saturday, April 11, 2015 2:57 PM",
        "user": {
          "name": "April",
          "surname": "Maddox",
          "photo": "http://placehold.it/100x100"
        }
      },
      {
        "id": "58753080d109f9bd3416fa01",
        "text": "proident ipsum anim amet",
        "isCompleted": false,
        "createdAt": "Saturday, November 29, 2014 12:00 AM",
        "user": {
          "name": "Ebony",
          "surname": "Gibson",
          "photo": "http://placehold.it/100x100"
        }
      },
      {
        "id": "5875308000df6d9336c39bd3",
        "text": "commodo officia ullamco nisi",
        "isCompleted": true,
        "createdAt": "Sunday, August 10, 2014 7:49 AM",
        "user": {
          "name": "Robles",
          "surname": "Compton",
          "photo": "http://placehold.it/100x100"
        }
      },
      {
        "id": "587530806f2eba950db809e7",
        "text": "commodo voluptate enim velit",
        "isCompleted": false,
        "createdAt": "Saturday, October 8, 2016 8:53 PM",
        "user": {
          "name": "Lester",
          "surname": "Wolf",
          "photo": "http://placehold.it/100x100"
        }
      },
      {
        "id": "58753080370051340a88d10b",
        "text": "cupidatat exercitation duis ut",
        "isCompleted": true,
        "createdAt": "Tuesday, December 15, 2015 12:14 PM",
        "user": {
          "name": "Benson",
          "surname": "Hurst",
          "photo": "http://placehold.it/100x100"
        }
      },
      {
        "id": "5875308059be72c9f5f76289",
        "text": "nisi occaecat non elit",
        "isCompleted": true,
        "createdAt": "Monday, November 21, 2016 11:42 AM",
        "user": {
          "name": "Aguilar",
          "surname": "Hamilton",
          "photo": "http://placehold.it/100x100"
        }
      }
    ];
  }

}
