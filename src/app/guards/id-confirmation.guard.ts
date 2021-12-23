import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginService } from '../services/auth/login.service';
@Injectable({
  providedIn: 'root'
})
export class IdConfirmationGuard implements CanActivate {

 constructor(private router:Router ,private loginService:LoginService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return true
    // return this.loginService.userLogued$
    // .pipe(
    //   map(user => {
    //     if(!user){
    //       this.router.navigate(['']);
    //       return false;
    //     }
    //     return true;
    //   })
    // )


  }




}
