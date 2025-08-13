// src/app/componentes/registro/registro.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Se importa el Router
import { CommonModule } from '@angular/common'; // Asegúrate de tenerlo importado

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  formulario!: FormGroup;

  constructor(private formG: FormBuilder, private router: Router) {} // Inyectamos el Router

  ngOnInit(): void {
    this.formulario = this.formG.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
    });
  }

  registrar() {
    if (this.formulario.valid) {
      console.log('Registrado Correctamente', this.formulario.value);
      // Simulación de registro exitoso, ahora se redirige al home
      this.router.navigate(['/']); 
    } else {
      this.formulario.markAllAsTouched();
    }
  }
}