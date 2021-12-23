import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { LoginConfirmationService } from '../services/auth/login-confirmation.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  loginConfirmation: boolean = localStorage.getItem("userLogued") ? true : false;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.loginConfirmation;
  }

}
