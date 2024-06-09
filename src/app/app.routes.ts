import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        loadChildren: () => import('./layout/main.routes').then(m => m.MAIN_ROUTES),
        canActivate: [ authGuard ]
    }
];
