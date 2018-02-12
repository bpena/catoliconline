import {RouterModule, Routes} from '@angular/router';
import { AuthGuard } from './modules/auth/services/auth.guard';

const ROUTES: Routes = [
  {
    path: '',
    loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'auth',
    loadChildren: './modules/auth/auth.module#AuthModule'
  }
];

export const AppRouter = RouterModule.forRoot(ROUTES, { useHash: false });
