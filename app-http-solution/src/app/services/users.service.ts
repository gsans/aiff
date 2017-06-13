import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from '../models/User';

@Injectable()
export class UsersService {
  constructor(private http: Http) { }

  public get(): Observable<Array<User>> {
    return this.http.get('/assets/users.json')
      .map((response) => response.json().users);
  }
}
