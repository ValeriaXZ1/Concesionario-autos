import { Component } from '@angular/core';
import { GaleriaComponent } from "../../componentes/galeria/galeria.component";
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [GaleriaComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
