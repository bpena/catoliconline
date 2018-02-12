import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { ProfileComponent } from './views/profile/profile.component';
import { UserRouter } from './user.router';
import { UserService } from './services/user.service';
import { UserGuard } from './services/user.guard';
import { MatGridListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    UserRouter
  ],
  declarations: [
    UserComponent,
    ProfileComponent
  ],
  providers: [
    UserGuard
  ]
})
export class UserModule { }
