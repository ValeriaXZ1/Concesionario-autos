import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http : HttpClient) { }

  private API_PRODUCTO= "http://localhost:8080/"

  postProduct(producto:any):Observable<any>{
    return this.http.post(`${this.API_PRODUCTO}/guardar`, producto)
  }
}
