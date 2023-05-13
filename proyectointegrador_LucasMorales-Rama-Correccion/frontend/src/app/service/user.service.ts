import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { usuario } from '../model/user.model';
import {Observable} from 'rxjs'



@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL = 'httt://localhost:8080/usuarios/';


  constructor(private http:HttpClient) { }

  public getUsuario(): Observable<usuario>{
    return this.http.get<usuario>(this.URL+'/usuario/traer')
  }
}
