import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouter } from './app.router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AuthGuard } from './modules/auth/services/auth.guard';
import { AuthService } from './modules/auth/services/auth.service';
import { UserService } from './modules/user/services/user.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouter,
    AngularFireModule.initializeApp(environment.config, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [AuthGuard, AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
