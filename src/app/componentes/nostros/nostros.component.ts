import { Component } from '@angular/core';
import { CarrucelComponent } from "../carrucel/carrucel.component";
import { TarjetasComponent } from "../tarjetas/tarjetas.component";

@Component({
  selector: 'app-nostros',
  imports: [CarrucelComponent, TarjetasComponent],
  templateUrl: './nostros.component.html',
  styleUrl: './nostros.component.css'
})
export class NostrosComponent {

}
