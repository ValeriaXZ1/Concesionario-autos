import { Component } from '@angular/core';
import { AutoService } from '../../servicios/auto.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actualizar',
  imports: [FormsModule],
  templateUrl: './actualizar.component.html',
  styleUrl: './actualizar.component.css'
})
export class ActualizarComponent {
  
  constructor(private servicioAuto: AutoService, 
    private router:Router, 
    private ruta: ActivatedRoute ){}

    
    tipo:any={
    
    marca: '',
    modelo: '',
    anio: '',
    placa: '',
    }

  ngOnInit():void{
    this.ruta.params.subscribe(params =>{
      this.tipo=params['tipo'];
      this.servicioAuto.getAutoById(this.tipo).subscribe(auto =>{
        this.tipo=auto;
      });
    });
  }

  editar(formulario : any):void{
    const autoActually={...formulario.value, tipo:this.tipo};
    this.servicioAuto.actualizar(this.tipo, autoActually).subscribe(()=>{
      this.router.navigate(['/autos']);
    })
  }
  

}
