import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { RouterOutlet } from "../../../../node_modules/@angular/router/router_module.d-Bx9ArA6K";
import { from } from 'rxjs';
import { AuthenService } from '../../servicios/authen.service';



@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
  constructor(public authentication: AuthenService,
              private router: Router
   ) { }

  logout=()=> {
    this.authentication.inicioSesion();
    const redireccion = '/';
    this.router.navigateByUrl(redireccion);
}
}
