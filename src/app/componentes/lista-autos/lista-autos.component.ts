// src/app/componentes/lista-autos/lista-autos.component.ts
import { Component, OnInit } from '@angular/core';
import { AutoService } from '../../servicios/auto.service'; // Asegúrate de que esta ruta sea la correcta
import { Autos } from '../../interface/autos';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-lista-autos',
  standalone: true,
  imports: [CommonModule, RouterLink], 
  templateUrl: './lista-autos.component.html',
  styleUrls: ['./lista-autos.component.css']
})
export class ListaAutosComponent implements OnInit {

  autos: any[] = [];

  constructor(private servicioAuto: AutoService) { }

  ngOnInit(): void {
    this.cargarAutos();
  }

  cargarAutos(): void {
    this.servicioAuto.agregarAutos().subscribe(
      (data: Autos[]) => { // Corrección: tipado explícito del parámetro 'data'
        this.autos = data;
      },
      (error) => { // Corrección: tipado explícito del parámetro 'error'
        console.error('Error al cargar autos:', error);
      }
    );
  }

  eliminarAuto(key: string | undefined): void {
    if (key) {
      if (window.confirm('¿Estás seguro de que quieres eliminar este auto?')) {
        this.servicioAuto.eliminarAuto(key).subscribe(
          () => {
            console.log('Auto eliminado con éxito');
            this.cargarAutos();
          },
          (error) => { // Corrección: tipado explícito del parámetro 'error'
            console.error('Error al eliminar auto:', error);
          }
        );
      }
    } else {
      console.error('No se pudo obtener la clave para eliminar el auto.');
    }
  }
}