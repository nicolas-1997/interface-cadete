import { Component, OnInit } from '@angular/core';
import { Travel } from 'src/app/models/travels.model';
import { LocalStorageData } from 'src/app/models/user.model';
import { TravelsService } from 'src/app/services/travels/travels.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit {

  private getUser = localStorage.getItem("userLogued");
  private parseUSer:LocalStorageData = JSON.parse(`${this.getUser}`)
  private idCadete:number = this.parseUSer.rol.id
  private userID:number = this.parseUSer.id

  dtoTravels8:Travel[] = []
  dtoTravels9:Travel[] = []
  // dtoTravels10:Travel[] = []
  allDto:Travel[] = []
  showArr:Travel[] = this.allDto
  myArr:Travel[] = []
  constructor(private travelService: TravelsService) {

  }

  ngOnInit(): void {
    this.travelService.getTravels(this.idCadete, 8).subscribe(resp =>{
      this.allDto.push(...resp)
      this.dtoTravels8 = resp
      this.filtrarDto()
    })

    this.travelService.getTravels(this.idCadete, 9).subscribe(resp =>{
       this.allDto.push(...resp)
       this.dtoTravels9 = resp
       this.filtrarDto()
    })


  }

  filtrarDto(){
    console.log('Filtrar Dto llamado')
    for (let i = 0; i < this.allDto.length; i++) {
      if (this.allDto[i].travelEquipmentDTOs[this.allDto[i].travelEquipmentDTOs.length-1].cadete != null ) {
        if (this.allDto[i].travelEquipmentDTOs[this.allDto[i].travelEquipmentDTOs.length-1].cadete.id == this.userID) {
          this.myArr.push(this.allDto[i])
        }
      }
    }
  }

}
