import { UsersService } from '../services/users.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/User';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  userslist: Observable<Array<User>>;
  
  constructor(private users: UsersService) { }
  
  ngOnInit() {
    this.userslist = this.users.get();
  }
  
  private onClick(msg) {
    console.log(msg);
  }
}
