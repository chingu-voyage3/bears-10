import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../core/user.service';
import { FlashMessagesService } from 'ngx-flash-messages';

@Component({
  selector: 'ims-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
  constructor (private userService: UserService,
               private flashMessagesService: FlashMessagesService) {}

  ngOnInit () {}

  submitLoginForm (form: NgForm) {
    this.userService
    .signIn(form.value)
    .subscribe((res) => {
      console.log('flashing message...', res);
      if (!res.ok) {
        this.flashMessagesService.show(res.message, {
          classes: ['alert', 'alert-warning'], // You can pass as many classes as you need
          timeout: 1000, // Default is 3000
        });
      }
    });
  }
}
