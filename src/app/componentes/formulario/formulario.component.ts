import { Component } from '@angular/core';
import { AutoService } from '../../servicios/auto.service';
import { FormsModule } from '@angular/forms';
import { ListaAutosComponent } from "../lista-autos/lista-autos.component";

@Component({
  selector: 'app-formulario',
  imports: [FormsModule, ListaAutosComponent],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  
    tipo= ['Automóvil', 'Camioneta', 'Motocicleta', 'Camión', 'Bus', 'Otro'];
    marca: string= '';
    modelo: string= '';
    anio: number= 0;
    placa: string=''
  

  tipos = ['Automóvil', 'Camioneta', 'Motocicleta', 'Camión', 'Bus', 'Otro'];


  constructor( private ServicioAuto:AutoService){}

  guardar(formulario:any) {
    this.ServicioAuto.guardarAuto(formulario.value).subscribe(()=>{
      window.location.reload();
    })
  }
}


