import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ims-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  pageState = this.refreshPageState();

  constructor() { }


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

}
