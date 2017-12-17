import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService {
  url = {
    signup: 'http://localhost:3000/api/signup',
    login: 'http://localhost:3000/api/login',
  };
  // proxy = 'https://cors-anywhere.herokuapp.com/';
  constructor(private http: HttpClient,
              private router: Router) { }

  signInStatusSubject = new Subject<any>();

  registerAdmin(formValue: { username: string, password: string }) {
    console.log('registering user...', formValue)
    this.http.post(this.url.signup, formValue)
    .subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token)
        this.router.navigate(['/inventory'])
        this.signInStatusSubject.next(true);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  signIn(formValue: {username: string, password: string}) {
    this.http.post(this.url.login, formValue)
    .subscribe(
      (res: any) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/inventory']);
          this.signInStatusSubject.next(true);
        }
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  logout() {
    localStorage.clear();
    this.signInStatusSubject.next(false);
    this.router.navigate(['/']);
  }
}
