import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ims-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  pageState = {
    addingUser:  false,
  };

  constructor() { }

  ngOnInit() {
  }

  toggleNewUser() {
    this.pageState.addingUser = !this.pageState.addingUser;
  }

}
