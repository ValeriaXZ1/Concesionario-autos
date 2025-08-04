import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { NostrosComponent } from './componentes/nostros/nostros.component';

export const routes: Routes = [
    {
        path:'' , component:HomeComponent
    },
    {
        path:'formulario' , component:FormularioComponent
    },
    {
        path:'nosotros', component:NostrosComponent
    }
];
