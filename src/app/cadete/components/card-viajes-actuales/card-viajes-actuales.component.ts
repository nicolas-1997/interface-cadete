import { Component, Input, OnInit } from '@angular/core';
import { TravelsService } from 'src/app/services/travels/travels.service';
@Component({
  selector: 'app-card-viajes-actuales',
  templateUrl: './card-viajes-actuales.component.html',
  styleUrls: ['./card-viajes-actuales.component.scss']
})
export class CardViajesActualesComponent implements OnInit {


  @Input() title:string = '';
  @Input() direccion:string = '';
  @Input() hora:string = '';
  @Input() equipo:string = '';
  @Input() statusTravel:number = 0;

  @Input() idtravel: number = 0;
  @Input() newStatusTravel: number = 0;
  @Input() idCadete:number = 0;


  state:boolean = false;


  changeState(){
    this.state = !this.state
    console.log("me hicieron click")
  }
  constructor(private travelService:TravelsService) { }

  ngOnInit(): void {
  }


  actualizarViaje(){
    this.travelService.postTravels(this.idtravel, this.newStatusTravel).subscribe(resp =>{
      console.log(resp)
    })
    this.state = !this.state
  }

  abandonarViaje(){
    this.travelService.cancelTravel(this.idtravel).subscribe(resp => {
      console.log(resp)
    });
    this.state = !this.state
  }
}
