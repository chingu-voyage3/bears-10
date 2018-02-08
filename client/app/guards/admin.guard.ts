import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../core/user.service';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private user: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
      let checkIfAdmin = false;
      this.user.isAdmin.subscribe(isAdmin => {
          checkIfAdmin = isAdmin;
      });
      return checkIfAdmin;
  }
}
