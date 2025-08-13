// src/app/servicios/authen.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Autos } from '../interface/autos';

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  private usuarios = {
    usuario: 'usuario',
    password: '12345'
  }
  private loggedIn = new BehaviorSubject<boolean>(this.inicioSesion());
  isAuthenticated$: Observable<boolean> = this.loggedIn.asObservable();

private API_AUTO = 'https://app-web-e5fb8-default-rtdb.firebaseio';

  constructor(private http: HttpClient) { }

  guardarAuto(auto: any): Observable<any> {
    return this.http.post(`${this.API_AUTO}autos.json`, auto);
  }

  getAutoByKey(key: string): Observable<Autos> {
    return this.http.get<Autos>(`${this.API_AUTO}autos/${key}.json`);
  }

  actualizarAuto(key: string, auto: any): Observable<any> {
    return this.http.put(`${this.API_AUTO}autos/${key}.json`, auto);
  }

  agregarAutos(): Observable<Autos[]> {
    return this.http.get<{ [key: string]: Autos }>(`${this.API_AUTO}autos.json`).pipe(
      map(response => {
        const autos: Autos[] = [];
        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            autos.push({ ...response[key], key });
          }
        }
        return autos;
      })
    );
  }

  eliminarAuto(key: string): Observable<any> {
    return this.http.delete(`${this.API_AUTO}autos/${key}.json`);
  }


  login(usuario: string, password: string): boolean {
    if (usuario === this.usuarios.usuario && password === this.usuarios.password) {
      localStorage.setItem('usuario', usuario);
      this.loggedIn.next(true); // Se emite 'true' a todos los suscriptores
      return true;
    } else {
      return false;
    }
  }

  inicioSesion(): boolean {
    return localStorage.getItem('usuario') !== null;
  }

  logout(): void {
    localStorage.removeItem('usuario');
    this.loggedIn.next(false); // Se emite 'false' a todos los suscriptores
  }
}