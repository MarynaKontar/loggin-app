import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  public isLoggedIn(username: string, password: string): boolean {
    if (username === 'Maryna' && password === 'secret') {return true; } else {return false; }
  }
}
