// src/app/servicios/authen.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {
  private usuarios = {
    usuario: 'usuario',
    password: '12345'
  };

  private loggedIn = new BehaviorSubject<boolean>(this.inicioSesion());
  isAuthenticated$: Observable<boolean> = this.loggedIn.asObservable();

  constructor() { }

  login=(usuario: string, password: string)=> {
    if (usuario === this.usuarios.usuario && password === this.usuarios.password) {
      localStorage.setItem('user', usuario);
      this.loggedIn.next(true);
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
    this.loggedIn.next(false);
  }
}