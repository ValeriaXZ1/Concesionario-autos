import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenService } from '../../servicios/authen.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  usuario:string = '';
  password:string = ''; 
  error: string = '';

  constructor(private authentication: AuthenService ,private router: Router) {}
  login=() => {
    const loginExitoso = this.authentication.login(this.usuario, this.password);
    if (loginExitoso) {
    const redireccion= localStorage.getItem('redirectUrl') || '/vehiculos';
      localStorage.removeItem('redirectUrl');
      this.router.navigateByUrl(redireccion);
    }else{
      this.error= 'Usuario o contraseña incorrectos';
    }
  }


}
