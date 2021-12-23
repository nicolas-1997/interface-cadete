import { Component, OnInit, Input } from '@angular/core';
import { Travel, TravelPost } from 'src/app/models/travels.model';
import { TravelsService } from 'src/app/services/travels/travels.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private travelService:TravelsService, private _snackBar: MatSnackBar) {
     let itemArr:Travel;
  }

  ngOnInit(): void {

  }

  //Header
  @Input() title:string = '';

  //Body
  @Input() direccion:string = '';
  @Input() hora:string = '';
  @Input() equipo:string = '';
  @Input() statusTravel:string = '';

  @Input() idtravel: number = 0;
  @Input() newStatusTravel: number = 0;

  newStatusTravel2:number =  this.newStatusTravel + 1 == 11 ? 1 : this.newStatusTravel + 1

  state:boolean = false;

  changeState(){
    this.state = !this.state
  }

   idUser:number = this.travelService.idCadete;


  dtosTravelPost:TravelPost = {
    statusTravel: this.newStatusTravel,
    travelId: this.idtravel
  };


  tomarViaje(){
    this.travelService.postTravels(this.idtravel, this.newStatusTravel).subscribe( resp => {
      this.openSnackBar('Viaje tomado con Exito!!', 'Ok')
    }
    )
  }

  openSnackBar(message:string, action:string){
    this._snackBar.open(message, action);
  }
}
