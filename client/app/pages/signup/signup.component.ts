import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../core/user.service';
import { FlashMessagesService } from 'ngx-flash-messages';
import { Observable } from 'rxjs/Observable';
interface ServerMessage {
  message: string;
}

@Component({
  selector: 'ims-signup',
  templateUrl: './signup.component.html',
  styleUrls: [ './signup.component.scss' ]
})
export class SignupComponent implements OnInit {
  constructor (private userService: UserService,
               private flashMessagesService: FlashMessagesService) {}

  ngOnInit () {}
  handleSubmit (form: NgForm) {
    this.userService
        .registerAdmin(form.value)
        .subscribe(
          (res: ServerMessage) => {
            console.log(res);
            this.flashMessagesService.show(res.message, {
              classes: ['alert', 'alert-warning'], // You can pass as many classes as you need
              timeout: 1000, // Default is 3000
            });
          },
          (err) => {
            console.log(err);
            this.flashMessagesService.show(err.message, {
              classes: ['alert', 'alert-warning'],
              timeout: 1000
            });
          }
        );
  }
}
