import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './views/login/login.component';

const ROUTES: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent }
    ]
  }
];

export const AuthRouter = RouterModule.forChild(ROUTES);
