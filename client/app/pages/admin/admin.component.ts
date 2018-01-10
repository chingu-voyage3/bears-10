import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/user.service';
import { FlashMessagesService } from 'ngx-flash-messages';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ims-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  pageState = this.refreshPageState();
  user = {
    password: '',
    confirmPassword: '',
  };

  constructor(private userService: UserService,
              private flashMessagesService: FlashMessagesService) { }


  ngOnInit() {
  }

  toggleNewUser() {
    this.pageState.addingUser = !this.pageState.addingUser;
  }

  refreshPageState() {
    return {
      addingUser: false,
      creatingUser: false,
      newUsername: '',
    };
  }

  close() {
    this.toggleNewUser();
    this.pageState = this.refreshPageState();
  }

  handleSubmit(f) {
    this.pageState.creatingUser = true;
    this.pageState.addingUser = false;
    this.pageState.newUsername = f.value.username;
    console.log(f.value);
  }

  submitUser(f: NgForm) {
    console.log('f.value is: ', f.value);
    // this.userService
    // .addNewUser(f);
    // console.log('the passwords are: ' , this.user);
    // console.log('the username is: ', this.pageState.newUsername);
  }

}
