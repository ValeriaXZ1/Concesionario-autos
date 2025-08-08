import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  constructor() { }
  
  private usuarios={
    usuario: 'usuario',
    password: '12345'
  }
  login=(usuario:string, password: string)=>{
    if(usuario === this.usuarios.usuario && password === this.usuarios.password){
      localStorage.setItem('usuario', usuario);
      return true;
    }else{
      return false;
    }
  }
  inicioSesion=()=>{
    return localStorage.getItem('usuario') !== null;
  }
  logout=()=>{
    localStorage.removeItem('usuario');
  }
}
