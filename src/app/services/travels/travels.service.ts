import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Travel, TravelPost } from 'src/app/models/travels.model';
import { LocalStorageData } from 'src/app/models/user.model';


@Injectable({
  providedIn: 'root'
})
export class TravelsService {


  dtoTravels5:Travel[] = []
  allDto:Travel[] = []


  private getUser = localStorage.getItem("userLogued");
  private parseUSer:LocalStorageData = JSON.parse(`${this.getUser}`)
  idCadete:number = this.parseUSer.id



  constructor(private http: HttpClient) { }

  api_url:string = `${environment.URL_API}/api/Travel`

  getTravels(roleId:number, statusTravel:number){
    return this.http.get<Travel[]>(`${this.api_url}/${roleId}/${statusTravel}`)
  }

  postTravels(travelId:number, statusTravel:number){
    return this.http.post<Travel>(`${this.api_url}?travelId=${travelId}&statusTravel=${statusTravel + 1}&userOperation=2&cadeteId=${this.idCadete}&isReasigned=false`,[travelId, statusTravel])
  }
  cancelTravel(travelId:number){
    return this.http.post<Travel>(`${this.api_url}?travelId=${travelId}&statusTravel=10&userOperation=1&cadeteId=${this.idCadete}&isReasigned=false`,travelId)
  }
}
