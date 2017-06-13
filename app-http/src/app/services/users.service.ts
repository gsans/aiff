import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { User } from '../models/User';

@Injectable()
export class UsersService {
  constructor() { }

  public get(): Observable<Array<User>> {
    let user: User = {
      id: 34,
      username: "Maciej",
      roles: [
        "admin",
        "user"
      ],
      superuser: true
    }; 
    return Observable.of([user]);
  }
}
