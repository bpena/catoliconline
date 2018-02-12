import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';

const ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'user',
        loadChildren: '../user/user.module#UserModule'
      }
    ]
  }
];

export const DashboardRouter = RouterModule.forChild(ROUTES);
