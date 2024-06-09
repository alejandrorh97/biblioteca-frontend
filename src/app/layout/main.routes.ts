import { Routes } from '@angular/router';
import { MainLayout } from './layout.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

export const MAIN_ROUTES: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'usuarios',
        loadChildren: () => import('../usuarios/usuarios.routes').then(m => m.USUARIOS_ROUTES)
      },
      {
        path: 'contenidos',
        loadChildren: () => import('../contenidos/contenidos.routes').then(m => m.CONTENIDOS_ROUTES)
      },
      {
        path: 'prestamos',
        loadChildren: () => import('../prestamos/prestamos.routes').then(m => m.PRESTAMOS_ROUTES)
      },
      {
        path: 'mis_prestamos',
        loadChildren: () => import('../MisPrestamos/mis.prestamos.routes').then(m => m.MIS_PRESTAMOS_ROUTES)
      }
    ]
  }
];
