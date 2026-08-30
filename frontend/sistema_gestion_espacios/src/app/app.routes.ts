import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { RecoverPassword } from './pages/recover-password/recover-password';
import { DashboardAdmin } from './pages/dashboard-admin/dashboard-admin';
import { DashboardUser } from './pages/dashboard-user/dashboard-user';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    data: { title: 'Inicio' },
  },
  {
    path: 'home',
    component: Home,
    data: { title: 'Inicio - Usuario' },
  },
  {
    path: 'about',
    component: About,
    data: { title: 'Acerca de' },
  },
  {
    path: 'login',
    component: Login,
    data: { title: 'Iniciar Sesión' },
  },
  {
    path: 'register',
    component: Register,
    data: { title: 'Registrarse' },
  },
  {
    path: 'recover-password',
    component: RecoverPassword,
    data: { title: 'Recuperar Contraseña' },
  },
  {
    path: 'dashboard/admin',
    component: DashboardAdmin,
    data: { title: 'Panel de Administrador' },
  },
  {
    path: 'dashboard/user',
    component: DashboardUser,
    data: { title: 'Panel del Usuario' },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
