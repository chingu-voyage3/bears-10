import { Directive, ElementRef, HostListener } from '@angular/core';
import { UserService } from '../user.service';

@Directive({
  selector: '[imsLogout]'
})
export class LogoutDirective {

  constructor(private userService: UserService) { }

  @HostListener('click') onclick() {
    console.log('clicked!');
    this.userService.logout();
  }
}
