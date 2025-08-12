import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  formulario!: FormGroup;
  formularioRegistro=()=>{
    return this.enviarFormulario && Object.values(this.registrar).some(valor => valor.trim?.() !== '');
  };

  constructor(private formG: FormBuilder) {}
  enviarFormulario: boolean = false;

  ngOnInit():void {
    this.formulario = this.formG.group({
      nombre: ['', Validators.required],
      apellido: ['' , Validators.required],
      email: ['' , [Validators.required, Validators.email]],
      telefono: ['' , Validators.required],
      password: ['' , [Validators.required, Validators.minLength(6), Validators.maxLength(12)]], 
    });
  }
  registrar=()=> {
    if(this.formulario.valid){
      this.enviarFormulario=true;
      console.log('Registrado Correctamente',this.formulario.value);
      alert('Registrado Correctamente');
    }else{
      this.formulario.markAllAsTouched();
      alert('Por favor complete el formulario correctamente');
    }
  }
}
