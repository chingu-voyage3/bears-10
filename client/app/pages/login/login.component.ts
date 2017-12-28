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
   user = {
     username: '',
     password: ''
   };

  ngOnInit () {

  }

  submitLoginForm (form: NgForm) {
    this.userService
    .signIn(form.value)
    .subscribe((res) => {
      let errMessage = '';
      const messageIsAnError = !res.ok && res.message !== 'ok' && !res.success;
      const fieldsFilled = form.value.username && form.value.password;
      if (!fieldsFilled) {
        errMessage = 'Please enter your username and password';
      } else {
        errMessage = 'Incorrect username or password';
      }
      console.log('flashing message...', res);
      if (messageIsAnError) {
        this.flashMessagesService.show(errMessage, {
          classes: ['alert', 'alert-warning'], // You can pass as many classes as you need
          timeout: 1000, // Default is 3000
        });
      }
    });
  }
}
