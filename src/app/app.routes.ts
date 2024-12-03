import { Routes } from '@angular/router';
import { LoginComponent } from './pages/pages/login/login.component';
import { HomeComponent } from './pages/pages/home/home.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: "",
        component: LoginComponent
    },
    {
        path: 'home-pokemon',
        component: HomeComponent,
        canActivate: [authGuard]
    }
];

