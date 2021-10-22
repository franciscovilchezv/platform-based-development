import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // currentUser: any;

  constructor(
    private http: HttpClient
  ) { }

  login(loginData: any) {
    return this.http.post<any>('http://localhost:3000/login', loginData).pipe(map(response => {
      this.setCurrentUser(response);
      return response;
    }));
  }

  addUser(user: any) {
    return this.http.post<any>('http://localhost:3000/users', user);
  }

  setCurrentUser(user: any) {
    // this.currentUser = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  getCurrentUser(): any {
    let user = localStorage.getItem('user');
    if (user){
      return JSON.parse(user);
    }
    return user;
  }

  isLoggedIn() {
    return Boolean(this.getCurrentUser());
  }

  logout() {
    // this.currentUser = null;
    localStorage.removeItem('user');
  }
}
