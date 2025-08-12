import { Component, OnInit } from '@angular/core';
import { AutoService } from '../../servicios/auto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Autos } from '../../interface/autos'; // Importa la interfaz

@Component({
  selector: 'app-actualizar',
  standalone: true, // Agrega 'standalone: true' si es un componente independiente
  imports: [FormsModule],
  templateUrl: './actualizar.component.html',
  styleUrl: './actualizar.component.css'
})
export class ActualizarComponent implements OnInit {

  // autoActualizar contendrá los datos del formulario y la clave
  autoActualizar: Autos = {
    tipo: '',
    marca: '',
    modelo: '',
    anio: 0,
    placa: ''
  };

  autoKey: string = ''; // Guardará la clave del auto

  constructor(
    private servicioAuto: AutoService,
    private router: Router,
    private ruta: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Obtener la clave del auto desde los parámetros de la URL
    this.ruta.params.subscribe(params => {
      this.autoKey = params['key']; // 'key' es el nombre que usaremos en la ruta
      if (this.autoKey) {
        this.servicioAuto.getAutoByKey(this.autoKey).subscribe(auto => {
          this.autoActualizar = auto;
        });
      }
    });
  }

  editar(): void {
    if (this.autoKey) {
      this.servicioAuto.actualizarAuto(this.autoKey, this.autoActualizar).subscribe(() => {
        this.router.navigate(['/autos']);
      }, (error) => {
        console.error('Error al actualizar el auto:', error);
      });
    }
  }
}
