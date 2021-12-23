import { Component, OnInit } from '@angular/core';
// import { LoginService } from './services/auth/login.service';


@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'M5T1-V1';

  // constructor(private loginService:LoginService){

  // }

  // ngOnInit(){
  //   const userLS  = localStorage.getItem('userLogued');
  //   if (userLS) {
  //     this.loginService.getUserLogued().subscribe()
  //   }
  // }
}
