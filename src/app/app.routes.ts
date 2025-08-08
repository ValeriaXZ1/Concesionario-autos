import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { ActualizarComponent } from './componentes/actualizar/actualizar.component';
import { NostrosComponent } from './componentes/nostros/nostros.component';
<<<<<<< HEAD
import { RegistroComponent } from './componentes/registro/registro.component';
import { authentGuard } from './guardianes/authent.guard';
import { VehiculosComponent } from './componentes/vehiculos/vehiculos.component';
=======
>>>>>>> dec10b1915b01de14c36fbf65ede9d37414e914b

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'formulario', component: FormularioComponent
    },
    {
<<<<<<< HEAD
        path:'autos/:id', component: ActualizarComponent
    },
    {
        path:'nosotros', component: NostrosComponent
    },
    {
        path:'registro', component: RegistroComponent
    },
    {
        path:'vehiculos', component:VehiculosComponent, canActivate: [authentGuard]
=======
        path: 'autos/:id', component: ActualizarComponent
    },
    {
        path: 'nosotros', component: NostrosComponent
>>>>>>> dec10b1915b01de14c36fbf65ede9d37414e914b
    }
];
