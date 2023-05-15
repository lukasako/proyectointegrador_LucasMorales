import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skills } from '../model/skills';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skURL='http://localhost:8080/skills/'

  constructor(private httpClient: HttpClient) { }

  
  public lista():Observable<Skills[]>{
    return this.httpClient.get<Skills[]>(this.skURL+'lista');
  }
  public  detail(id:number): Observable<Skills>{
    return this.httpClient.get<Skills>(this.skURL + `detail/${id}`);
  }
  public save(skills: Skills): Observable<any>{
    return this.httpClient.post<any>(this.skURL+'create', skills);
  }
  public update(id:number, skills: Skills): Observable<any>{
    return this.httpClient.put<any>(this.skURL+ `update/${id}`, skills);
  }
  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.skURL+ `delete/${id}`);
  }
}
