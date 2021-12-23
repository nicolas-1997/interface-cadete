import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-history',
  templateUrl: './card-history.component.html',
  styleUrls: ['./card-history.component.scss']
})
export class CardHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Input() title:string = '';

  state:boolean = false;

  changeState(){
    this.state = !this.state
  }


  //Body
  @Input() direccion:string = '';
  @Input() hora:string = '';
  @Input() equipo:string = '';
  @Input() statusTravel:string = '';

  @Input() idtravel: number = 0;
  @Input() newStatusTravel: number = 0;
}
