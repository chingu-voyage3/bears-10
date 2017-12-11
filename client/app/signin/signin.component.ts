import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'ims-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  
  handleSubmit(form: NgForm) {
    this.userService.signIn(form.value)
  }
}
