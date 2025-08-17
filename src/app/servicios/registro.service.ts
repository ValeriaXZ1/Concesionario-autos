import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http : HttpClient) { }

  private API_USER= "http://localhost:8080/"

  postUser(user:any):Observable<any>{
    return this.http.post(`${this.API_USER}/guardar`, user)
  }
}
