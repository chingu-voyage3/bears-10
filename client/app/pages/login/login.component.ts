import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../user.service';

@Component({
  selector: 'ims-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
  constructor (private userService: UserService) {}

  ngOnInit () {}

  submitLoginForm (form: NgForm) {
    this.userService.signIn(form.value);
  }
}
