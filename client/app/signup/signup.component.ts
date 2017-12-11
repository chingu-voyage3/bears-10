import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'ims-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  handleSubmit(form: NgForm) {
    this.userService.registerAdmin(form.value);
  }
}
