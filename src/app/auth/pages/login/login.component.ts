import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/auth/login.service';
import { Login, LocalStorageData, User } from 'src/app/models/user.model';
import { LoginConfirmationService } from 'src/app/services/auth/login-confirmation.service';
import { UserIdentifierService } from 'src/app/services/auth/user-identifier.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: FormGroup

  loginDatos:Login = {
    email: '',
    password: ''
  }

  localStorageData:LocalStorageData = {
    "address":'',
    "cellPhone": 0,
    "email": '',
    "fullName": '',
    "id": 0,
    "rol": {
      "id": 0,
      "isDeleted": 0,
      "name": ''
    }
  }

  img:string = '../../../../assets/img/Login.svg'

  constructor(private formbuilder:FormBuilder,
              private loginService:LoginService,
              private loginConfirmationService:LoginConfirmationService,
              private router:Router,
              private _snackBar: MatSnackBar) {
    this.login = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  ngOnInit(): void {
  }

  // console.log(this.login.value.email, this.login.value.password )
  loginData(){
    this.loginDatos.email = this.login.value.email;
    this.loginDatos.password = this.login.value.password;

    this.loginService.loginAuth(this.loginDatos).subscribe(resp => {
      this.saveData(resp)

      localStorage.setItem("userLogued", JSON.stringify(this.localStorageData));

      let confirmLog = this.loginConfirmationService.confirmUserLogin()

      if(confirmLog){
        this.refreshForm()
      }
      let getUser = localStorage.getItem("userLogued");
      let parseUSer:LocalStorageData = JSON.parse(`${getUser}`)

      let idRol = parseUSer.rol.id
      if(idRol === 2){
        this.router.navigate(['cadete'])
      }
      this.openSnackBar('Inicio de Sesison Exitoso!!', 'Ok')

    },(error) =>{
      this.openSnackBar('Ups! Datos Erroneos', 'Ok')

    })




  }

  private refreshForm(){
    this.login.patchValue({
      email: '',
      password: ''
    })
  }

  saveData(resp:User){
    this.localStorageData.address = resp.address;
    this.localStorageData.cellPhone = resp.cellPhone;
    this.localStorageData.email = resp.email;
    this.localStorageData.fullName = resp.fullName;
    this.localStorageData.id = resp.id;
    this.localStorageData.rol = resp.rol;
  }

  openSnackBar(message:string, action:string){
    this._snackBar.open(message, action);
  }
}
