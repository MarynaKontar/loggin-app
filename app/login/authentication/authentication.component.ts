import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  counter: number = 0;
  isLoggedIn: boolean = false;
  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit() {

    setInterval(() =>{this.counter ++;}, 2000);
  }

  login(username: string, password: string) {
    this.isLoggedIn = this.authenticationService.isLoggedIn(username, password);
  }

}
