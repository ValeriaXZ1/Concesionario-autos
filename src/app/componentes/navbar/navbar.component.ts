// src/app/componentes/navbar/navbar.component.ts
import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { AuthenService } from '../../servicios/authen.service';
import { CommonModule } from '@angular/common'; // Necesario para *ngIf

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(public authentication: AuthenService, private router: Router) { }

  ngOnInit(): void {
    // Nos suscribimos al estado de autenticación del servicio
    this.authentication.isAuthenticated$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  logout() {
    this.authentication.logout();
    this.router.navigateByUrl('/login'); // Redirige al login al cerrar sesión
  }
}