import { Component } from '@angular/core';
import { AutoService } from '../../servicios/auto.service';
import { FormsModule } from '@angular/forms';
import { ListaAutosComponent } from "../lista-autos/lista-autos.component";
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  
    tipo: string= '';
    marca: string= '';
    modelo: string= '';
    anio: number= 0;
    placa: string=''
  

  tipos = ['Automóvil', 'Camioneta', 'Motocicleta', 'Camión', 'Bus', 'Otro'];


  constructor( private ServicioAuto:AutoService, 
    private productoServicio: ProductosService
  ){}

  guardar(formulario:any) {
    this.ServicioAuto.guardarAuto(formulario.value).subscribe(()=>{
      window.location.reload();
    })
  }
  guardarP=(FormularioC: any)=>{
    this.productoServicio.postProduct(FormularioC.value).subscribe(()=>{
      window.location.reload;
    })
  }
}


