import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User, Login } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, tap } from 'rxjs';
import { LocalStorageData } from '../../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private api_url:string = `${environment.URL_API}`;
  // private userLogued = new BehaviorSubject<LocalStorageData | null>(null);



  // private getUser = localStorage.getItem("userLogued");
  // private parseUSer:LocalStorageData = JSON.parse(`${this.getUser}`)
  // private idUser = this.parseUSer.id

  // userLogued$ = this.userLogued.asObservable();

  constructor(private http:HttpClient) { }

  loginAuth(dto:Login){
    return this.http.get<User>(`${this.api_url}/api/Login?email=${dto.email}&password=${dto.password}`)
  }
  // getUserLogued(){
  //   return this.http.get<User>(`${this.api_url}/Users?userOperation=${this.idUser}`).pipe(
  //     tap(userLogued => this.userLogued.next(userLogued) )
  //   )
  // }
}
