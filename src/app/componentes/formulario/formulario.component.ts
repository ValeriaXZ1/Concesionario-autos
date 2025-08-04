import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  imports: [],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  vehiculo = {
    tipo: '',
    marca: '',
    modelo: '',
    anio: null,
  };

  tipos = ['Automóvil', 'Camioneta', 'Motocicleta', 'Camión', 'Bus', 'Otro'];

  guardar() {
    console.log('Datos del vehículo:', this.vehiculo);
    alert('Vehículo registrado correctamente.');
  }
}


