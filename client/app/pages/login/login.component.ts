import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../core/user.service';

@Component({
  selector: 'ims-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
  constructor (private userService: UserService) {}
  user = {
    username: '',
    password: ''
  };

  ngOnInit () {

  }

  submitLoginForm (form: NgForm) {
    this.userService.signIn(form.value);
  }
}
