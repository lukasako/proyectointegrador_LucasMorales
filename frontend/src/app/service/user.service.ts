import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { usuario } from '../model/user.model';
import {Observable} from 'rxjs'



@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL = 'http://localhost:8080/usuario/';


  constructor(private httpClient:HttpClient) { }

  public lista():Observable<usuario[]>{
    return this.httpClient.get<usuario[]>(this.URL+'lista');
  }
  public  detail(id:number): Observable<usuario>{
    return this.httpClient.get<usuario>(this.URL + `detail/${id}`);
  }
  public update(id:number, Usuario: usuario): Observable<any>{
    return this.httpClient.put<any>(this.URL+ `update/${id}`, Usuario);
  }

}
