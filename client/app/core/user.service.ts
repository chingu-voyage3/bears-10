import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { FlashMessagesService } from 'ngx-flash-messages';

@Injectable()
export class UserService {
  url = {
    signup: 'http://localhost:3000/api/signup',
    login: 'http://localhost:3000/api/login',
  };
  // proxy = 'https://cors-anywhere.herokuapp.com/';
  constructor(private http: HttpClient,
              private router: Router,
              private flashMessagesService: FlashMessagesService
              ) { }

  signInStatusSubject = new Subject<any>();

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
          localStorage.setItem('token', res.token);
          this.router.navigate(['/inventory']);
          this.signInStatusSubject.next(true);
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
          localStorage.setItem('token', res.token);
          this.router.navigate(['/inventory']);
          this.signInStatusSubject.next(true);
        }
        console.log(res)
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

  logout() {
    localStorage.clear();
    this.signInStatusSubject.next(false);
    this.router.navigate(['/']);
  }
}
