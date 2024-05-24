import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainLayout } from './layout/layout.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: MainLayout
  }
];
