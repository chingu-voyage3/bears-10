import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FlashMessagesService } from 'ngx-flash-messages';
import * as jwt_decode from 'jwt-decode';

@Injectable()
export class UserService {
  url = {
    signup: '/api/signup',
    login: '/api/login',
  };
  loggedIn: boolean;
  isLoggedIn = new BehaviorSubject<boolean>(this.loggedIn);
  // proxy = 'https://cors-anywhere.herokuapp.com/';
  constructor(private http: HttpClient,
              private router: Router,
              private flashMessagesService: FlashMessagesService
              ) {
                if (this.isTokenValid) {
                  this.setLoggedInStatus(true);
                } else if (!this.isTokenValid) {
                  this.logout();
                }
              }

  setLoggedInStatus (value: boolean) {
    this.isLoggedIn.next(value);
    this.loggedIn = value;
  }

  registerAdmin(formValue: { username: string, password: string, confirmpassword: string }): void {
    const formValuesFilled = formValue.username && formValue.password && formValue.confirmpassword;
    const passwordIsCorrectLength = formValue.password.length >= 6 && formValue.password.length <= 20;
    const errorMessage = (() => {
      let errMessage = '';
      if (!formValuesFilled) {
        errMessage = 'All fields must be be filled.';
      } else if (!passwordIsCorrectLength) {
        errMessage = 'password must be between 6 and 20 characters';
      } else if (formValue.password !== formValue.confirmpassword) {
        errMessage = 'Your passwords don\'t match';
      } else {
        errMessage = 'The user already exists.';
      }
      return errMessage;
    })();

    if (formValuesFilled && passwordIsCorrectLength) {
      this.http.post(this.url.signup, formValue).subscribe(
        (res: any) => {
          console.log('res is: ', res);
          this.setSession(res.token);
          this.router.navigate(['/inventory']);
          this.setLoggedInStatus(true);
        },
        (err: any) => {
          this.flashMessagesService.show(errorMessage, {
            classes: ['alert', 'alert-warning'], // You can pass as many classes as you need
            timeout: 1000, // Default is 3000
          });
        }

      );
    } else {
      this.flashMessagesService.show(errorMessage, {
        classes: [],
        timeout: 1000,
      });
    }
  }

  signIn(formValue: {username: string, password: string}): Observable<any> {
    const requestStream = this.http.post(this.url.login, formValue);

    requestStream.subscribe(
      (res: any) => {
        if (res.token) {
          this.setSession(res.token);
          this.router.navigate(['/inventory']);
          this.setLoggedInStatus(true);
        }
      },
      (err: any) => {
        console.log(err);
        this.flashMessagesService.show('there was an error...', {
          classes: ['alert', 'alert-warning'],
          timeout: 1000,
        });
      }
    );

    return requestStream;
  }

  setSession(token): void {
    const decodedToken = jwt_decode(token);
    const tokenExpiration = JSON.stringify(decodedToken.exp * 1000);
    const adminCheck = JSON.stringify(decodedToken.isAdmin);
    localStorage.setItem('expiresIn', tokenExpiration);
    localStorage.setItem('isAdmin', adminCheck);
    localStorage.setItem('token', token);
  }

  logout() {
    localStorage.clear();
    this.setLoggedInStatus(false);
    this.router.navigate(['/']);
  }

  addNewUser(f) {
    console.log('in add new user method', f.value);
  }

  get isTokenValid(): boolean {
    const expiresIn = JSON.parse(localStorage.getItem('expiresIn'));
    return Date.now() < expiresIn;
  }
}
