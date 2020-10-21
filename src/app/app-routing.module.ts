import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PwdComponent } from './pwd/pwd.component';

export const RUTAS: Routes = [
  {path: '',  redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'loginPsw/:loguser', component: PwdComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'login' }
];
