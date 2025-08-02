import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { autos } from '../interface/autos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  constructor( private http : HttpClient  ) { }

  private API_AUTO='https://appweb-84711-default-rtdb.firebaseio.com/'

  getAutos():Observable<any>{
    return this.http.get(`${this.API_AUTO}`)
  }

}
