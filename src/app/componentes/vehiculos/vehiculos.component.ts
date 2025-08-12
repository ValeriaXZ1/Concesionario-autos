import { Component } from '@angular/core';
import { ListaAutosComponent } from "../lista-autos/lista-autos.component";

@Component({
  selector: 'app-vehiculos',
  imports: [ListaAutosComponent],
  templateUrl: './vehiculos.component.html',
  styleUrl: './vehiculos.component.css'
})
export class VehiculosComponent {

}
