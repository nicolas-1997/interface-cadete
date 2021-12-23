import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginConfirmationService {

  constructor() { }


  confirmUserLogin(){
    return localStorage.getItem("userLogued") ? true : false;
  }
}
