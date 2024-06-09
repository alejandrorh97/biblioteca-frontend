import { Routes } from '@angular/router';
import { IndexUsuariosComponent } from './index-usuarios/index-usuarios.component';
import { CreateUsuarioComponent } from './create-usuario/create-usuario.component';


export const USUARIOS_ROUTES: Routes = [
  {
    path: '',
    component: IndexUsuariosComponent
  },
  {
    path: 'crear',
    component: CreateUsuarioComponent
  }
];
