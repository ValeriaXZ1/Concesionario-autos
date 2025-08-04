import { Component } from '@angular/core';
import { Autos} from '../../interface/autos';
import { AutoService } from '../../servicios/auto.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-autos',
  imports: [RouterLink],
  templateUrl: './lista-autos.component.html',
  styleUrl: './lista-autos.component.css'
})
export class ListaAutosComponent {
  autos: Autos[]=[];

  constructor(private servicioAuto: AutoService){}

  ngOnInit():void{
    this.servicioAuto.agregarAutos().subscribe(data =>{
      this.autos=Object.keys(data).map(key=>({
        tipo:key, 
        ...data[key]
      }));
    });
  }

  eliminarAuto(tipo:string):void{
    
    
    this.servicioAuto.eliminarAuto(tipo).subscribe(()=>{
      this.autos=this.autos.filter(autos => autos.tipo !==tipo);
    }, error=>{
      console.log('no se puede eliminar', error);
      
    }
  )
  }

}
