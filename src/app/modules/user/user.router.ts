import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { ProfileComponent } from './views/profile/profile.component';
import { UserGuard } from './services/user.guard';

const ROUTES: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'profile', component: ProfileComponent }
    ],
    canActivateChild: [UserGuard]
  }
];

export const UserRouter = RouterModule.forChild(ROUTES);
