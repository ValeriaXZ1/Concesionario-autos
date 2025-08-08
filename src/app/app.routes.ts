import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { ActualizarComponent } from './componentes/actualizar/actualizar.component';
import { NostrosComponent } from './componentes/nostros/nostros.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { authentGuard } from './guardianes/authent.guard';
import { VehiculosComponent } from './componentes/vehiculos/vehiculos.component';

export const routes: Routes = [
    {
        path:'' , component:HomeComponent
    },
    {
        path:'formulario' , component:FormularioComponent
    },
    {
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
    }
];
