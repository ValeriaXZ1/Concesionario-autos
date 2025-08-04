import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Autos } from '../interface/autos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  private autos : Autos[]=[]

  constructor( private http : HttpClient  ) { }

  private API_AUTO='https://appweb-84711-default-rtdb.firebaseio.com/'

  guardarAuto(autos:any):Observable<any>{
    return this.http.post(`${this.API_AUTO}/autos.json`,autos)
    
  }

  agregarAutos(): Observable<any>{
    return this.http.get(`${this.API_AUTO}/autos.json`);
  }

  getAutoById(tipo:string): Observable<any>{
    return this.http.get(`${this.API_AUTO}/autos/${tipo}.json`);
  }

  eliminarAuto(tipo:string):Observable<any>{
    return this.http.delete(`${this.API_AUTO}/autos/${tipo}.json`);
  }

  actualizar(tipo:string, auto:any): Observable<any>{
    return this.http.put(`${this.API_AUTO}/auto${tipo}.json`, auto)
  }

}
