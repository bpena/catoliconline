import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './views/login/login.component';
import { AuthRouter } from './auth.router';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { AuthGuard } from './services/auth.guard';
import { AuthService } from './services/auth.service';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/services/user.service';

@NgModule({
  imports: [
    AuthRouter,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ],
  declarations: [
    AuthComponent,
    LoginComponent
  ],
  exports: [
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class AuthModule { }
