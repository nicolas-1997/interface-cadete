import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  img1:string = '../../../../assets/img/Mobile1.png'
  img2:string = '../../../../assets/img/welcomeMobile.svg '
  constructor() { }

  ngOnInit(): void {

  }

}
