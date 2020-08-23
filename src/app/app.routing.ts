import{ ModuleWithProviders } from '@angular/core';
import{ Routes, RouterModule } from '@angular/router';

//importar componentes
import{ LoginComponent } from './componentes/login/login.component';
import{ IncidenciaComponent } from './componentes/incidencia/incidencia.component';
import{ HomeComponent } from './componentes/home/home.component';

//rutas

const appRoutes: Routes=[

    {path: '', component: HomeComponent},
    {path: 'inicio', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'incidencia', component: IncidenciaComponent},

];

//exportar config rutas
export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);