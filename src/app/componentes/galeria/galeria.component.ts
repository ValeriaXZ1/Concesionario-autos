import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  imports: [],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {
   infoSeleccionada: string = '';
  modalAbierto: boolean = false;

  mostrarInfo(info: string) {
    this.infoSeleccionada = info;
    this.modalAbierto = true;
  }

  cerrarModal() {
    this.modalAbierto = false;
  }

}
