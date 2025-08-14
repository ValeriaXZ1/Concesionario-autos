// src/app/componentes/registro/registro.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Se importa el Router
import { CommonModule } from '@angular/common'; // Asegúrate de tenerlo importado

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  
  formulario!: FormGroup;
  enviar: boolean = false;

  constructor(private formB: FormBuilder, private router: Router) {} // Inyectamos el Router

  ngOnInit(): void {
    this.formulario = this.formB.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
    });
  }

  registrar() {
    if (this.formulario.valid) {
      this.enviar = true;
      console.log('Registrado Correctamente', this.formulario.value);
      // Simulación de registro exitoso, ahora se redirige al home
      this.router.navigate(['/']); 
    } else {
      this.formulario.markAllAsTouched();
    }
  }
  vacio=()=>{
    return !this.enviar && Object.values(this.formulario).some(valor => valor.trim?.() !== '');
  }
}