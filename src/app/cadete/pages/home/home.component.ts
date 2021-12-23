import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageData } from 'src/app/models/user.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  private getUser = localStorage.getItem("userLogued");
  private parseUSer:LocalStorageData = JSON.parse(`${this.getUser}`)

  nombreCadete:string = this.parseUSer.fullName

  imgCadete:string = '../../../../assets/img/cadete.svg'

  ngOnInit(): void {
  }

  cerrarSesion(){
    localStorage.clear()
    this.router.navigate([''])
  }
}
