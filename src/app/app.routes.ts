import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { ActualizarComponent } from './componentes/actualizar/actualizar.component';
import { NostrosComponent } from './componentes/nostros/nostros.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { VehiculosComponent } from './componentes/vehiculos/vehiculos.component';
import { ListaAutosComponent } from './componentes/lista-autos/lista-autos.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { authentGuard } from './guardianes/authent.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'formulario', component: FormularioComponent, canActivate: [authentGuard] },
    { path: 'autos', component: ListaAutosComponent, canActivate: [authentGuard] },
    { path: 'autos/:id', component: ActualizarComponent, canActivate: [authentGuard] },
    { path: 'nosotros', component: NostrosComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'vehiculos', component: VehiculosComponent, canActivate: [authentGuard] },
    { path: 'productos', component: ProductosComponent, canActivate: [authentGuard] },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '' } // Ruta para manejar URL incorrectas
];