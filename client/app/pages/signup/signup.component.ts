import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../core/user.service';
import { FlashMessagesService } from 'ngx-flash-messages';
import { Observable } from 'rxjs/Observable';
interface ServerMessage {
  message: string;
  ok: boolean;
}

@Component({
  selector: 'ims-signup',
  templateUrl: './signup.component.html',
  styleUrls: [ './signup.component.scss' ]
})
export class SignupComponent implements OnInit {
  constructor (private userService: UserService,
               private flashMessagesService: FlashMessagesService) {}
  user = {
    username: '',
    password: '',
    confirmpassword: '',
  };

  ngOnInit () {}
  handleSubmit (form: NgForm) {
    this.userService
        .registerNewUser(form.value, true);
  }
}
