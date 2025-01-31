import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'correo',
    loadChildren: () => import('./pages/correo/correo.module').then( m => m.CorreoPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'pregunta',
    loadChildren: () => import('./pages//pregunta/pregunta.module').then( m => m.PreguntaPageModule)
  },
  
  {
    path: 'correcto',
    loadChildren: () => import('./pages/correcto/correcto.module').then( m => m.CorrectoPageModule)
  },
  {
    path: 'incorrecto',
    loadChildren: () => import('./pages/incorrecto/incorrecto.module').then( m => m.IncorrectoPageModule)
  },
  {
    path: 'miClase/:bloqueInicio/:bloqueTermino/:dia/:horaFin/:horaInicio/:idAsignatura/:nombreAsignatura/:nombreProfesor/:seccion/:sede',
    loadChildren: () => import('./pages/mi-clase/mi-clase.module').then(m => m.MiClasePageModule)
  },
  {
    path: 'miClase',
    loadChildren: () => import('./pages/mi-clase/mi-clase.module').then(m => m.MiClasePageModule)
  },
  
  
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
