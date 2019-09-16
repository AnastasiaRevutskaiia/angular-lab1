import { Component, OnInit } from '@angular/core';

import { User } from './models/user.model';

@Component({
  selector: 'app-custom-component',
  templateUrl: './custom-component.component.html',
  styleUrls: ['./custom-component.component.scss']
})
export class CustomComponentComponent implements OnInit {
  userName: string;
  user: User;
  isLoggedIn = true;
  articles: string[] = ['article1', 'article2', 'articele3'];

  constructor() { }

  ngOnInit() {
    this.userName = this.getUserName();
    this.user = new User(this.userName, 12);
  }

  getUserName() {
    return 'World';
  }

  onLogout(isLoggedOut: boolean) {
    alert('User has been logout');
    this.user.age = null;
    this.user.name = null;
    this.isLoggedIn =  false;
  }
}
