// src/app/componentes/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenService } from '../../servicios/authen.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Se importa para el two-way data binding
import { CommonModule } from '@angular/common'; // Asegúrate de tenerlo importado

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usuario: string = '';
  password: string = '';
  error: string = '';

  constructor(private authentication: AuthenService, private router: Router) { }

  login() {
    const loginExitoso = this.authentication.login(this.usuario, this.password);
    if (loginExitoso) {
      const redireccion = localStorage.getItem('redirectUrl') || '/'; // Redirige al home si no hay URL de redirección
      localStorage.removeItem('redirectUrl');
      this.router.navigateByUrl(redireccion);
    } else {
      this.error = 'Usuario o contraseña incorrectos';
    }
  }
}