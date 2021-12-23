import { Component, OnInit } from '@angular/core';
import { Travel } from 'src/app/models/travels.model';
import { LocalStorageData } from 'src/app/models/user.model';
import { TravelsService } from 'src/app/services/travels/travels.service';

@Component({
  selector: 'app-viajes-actuales',
  templateUrl: './viajes-actuales.component.html',
  styleUrls: ['./viajes-actuales.component.scss']
})
export class ViajesActualesComponent implements OnInit {

  private getUser = localStorage.getItem("userLogued");
  private parseUSer:LocalStorageData = JSON.parse(`${this.getUser}`)
  private idCadete:number = this.parseUSer.rol.id
  private userID:number = this.parseUSer.id

  dtoTravels2:Travel[] = []
  dtoTravels3:Travel[] = []
  dtoTravels6:Travel[] = []
  dtoTravels7:Travel[] = []

  // dtoTravels10:Travel[] = []
  allDto:Travel[] = []
  myArr:Travel[] = []
  constructor(private travelService: TravelsService) {

  }

  ngOnInit(): void {
    this.travelService.getTravels(this.idCadete, 2).subscribe(resp =>{
      this.allDto.push(...resp)
      this.dtoTravels2 = resp
      this.filtrarDto()
    })

    this.travelService.getTravels(this.idCadete, 3).subscribe(resp =>{
       this.allDto.push(...resp)
       this.dtoTravels3 = resp
       this.filtrarDto()
    })

    this.travelService.getTravels(this.idCadete, 6).subscribe(resp =>{
      this.allDto.push(...resp)
      this.dtoTravels6 = resp
      this.filtrarDto()
   })
   this.travelService.getTravels(this.idCadete, 7).subscribe(resp =>{
    this.allDto.push(...resp)
    this.dtoTravels7 = resp
    this.filtrarDto()
 })
}

  filtrarDto(){
    console.log(this.allDto)
    for (let i = 0; i < this.allDto.length; i++) {
      if (this.allDto[i].travelEquipmentDTOs[this.allDto[i].travelEquipmentDTOs.length-1].cadete != null ) {
        if (this.allDto[i].travelEquipmentDTOs[this.allDto[i].travelEquipmentDTOs.length-1].cadete.id == this.userID) {
          this.myArr.push(this.allDto[i])
          console.log( this.myArr)
        }
      }
    }
  }


}
