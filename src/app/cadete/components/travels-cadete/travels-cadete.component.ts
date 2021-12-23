import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TravelsService } from 'src/app/services/travels/travels.service';
import { LocalStorageData } from 'src/app/models/user.model';
import { Travel } from 'src/app/models/travels.model';


@Component({
  selector: 'app-travels-cadete',
  templateUrl: './travels-cadete.component.html',
  styleUrls: ['./travels-cadete.component.scss']
})
export class TravelsCadeteComponent implements OnInit {


  private getUser = localStorage.getItem("userLogued");
  private parseUSer:LocalStorageData = JSON.parse(`${this.getUser}`)
  private idCadete:number = this.parseUSer.rol.id



  dtoTravels1:Travel[] = []
  dtoTravels5:Travel[] = []
  // dtoTravels10:Travel[] = []
  allDto:Travel[] = []
  showArr:Travel[] = this.allDto

  constructor(private travelService: TravelsService) {

  }

  ngOnInit(): void {
    this.travelService.getTravels(this.idCadete, 1).subscribe(resp =>{
      this.allDto.push(...resp)
      this.dtoTravels1 = resp

    })
    this.travelService.getTravels(this.idCadete, 5).subscribe(resp =>{
       this.allDto.push(...resp)
       this.dtoTravels5 = resp
    })
    // this.travelService.getTravels(this.idCadete, 10).subscribe(resp =>{
    //   this.allDto.push(...resp)
    //   this.dtoTravels10 = resp
    // })
  }

  allTravels:boolean = false;
  travels1:boolean = false;
  travels5:boolean = false;


  filtroRetiro(){
    this.showArr = this.dtoTravels1
  }
  filtroAll(){
    this.showArr = this.allDto
    console.log(this.showArr)
  }
  filtroEntrega(){
    this.showArr = this.dtoTravels5
  }
}
