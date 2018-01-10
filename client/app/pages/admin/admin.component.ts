import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/user.service';
import { FlashMessagesService } from 'ngx-flash-messages';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ims-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  pageState = this.refreshPageState();
  user = {
    username: '',
    password: '',
    confirmPassword: '',
    access: ''
  };

  constructor(private userService: UserService,
              private flashMessagesService: FlashMessagesService) { }


  ngOnInit() {
  }

  onRadioClick(option: string) {
    this.user.access = option;
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
  }

  submitUser() {
    this.user.username = this.pageState.newUsername;
    console.log('user is: ', this.user);
    this.userService
    .addNewUser(this.user);
  }

}
