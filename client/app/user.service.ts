import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  url = 'http://localhost:3000/api/signup';
  // proxy = 'https://cors-anywhere.herokuapp.com/';
  constructor(private http: HttpClient) { }

  registerAdmin(formValue: { username: string, password: string }) {
    console.log('registering user...', formValue)
    this.http.post(this.url, formValue)
    .subscribe(
      res => {console.log(res)}
    )
  }
}
