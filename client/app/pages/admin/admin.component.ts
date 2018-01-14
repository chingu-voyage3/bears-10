import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/user.service';
import { FlashMessagesService } from 'ngx-flash-messages';

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

  submitUser(f) {
    console.log('the value of accessLevel is: ', f.value.accessLevel);
    if (f.value.accessLevel == 'admin') {
      this.userService
        .registerAdmin(f.value);
    } else {
      this.userService
        .registerUser(f.value);
    }
  }

}
