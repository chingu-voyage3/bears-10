import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'ims-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  loggedIn = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.signInStatusSubject.subscribe(
      loggedInStatus => {
        this.loggedIn = loggedInStatus;
      },
      err => console.log('there was an error...')
    );
  }

}
