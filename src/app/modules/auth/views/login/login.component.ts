import { Component, Input, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() urlCallback = '';
  user = null;

  constructor(private authService: AuthService,
              private ngZone: NgZone,
              private router: Router) { }


  ngOnInit() {
  }


  signInWithTwitter() {
    this.authService.signInWithTwitter()
      .then(data => this.goToDashboard(data, this))
      .catch(this.processError);
  }


  signInWithFacebook() {
    this.authService.signInWithFacebook()
      .then(data => this.goToDashboard(data, this))
      .catch(this.processError);
  }


  signInWithGoogle() {
    this.authService.signInWithGoogle()
      .then(data => this.goToDashboard(data, this))
      .catch(this.processError);
  }


  signInWithGithub() {
    this.authService.signInWithGithub()
      .then(data => this.goToDashboard(data, this))
      .catch(this.processError);
  }


  goToDashboard(value: any, that: any) {
    console.log(value);
    that.ngZone.run(() => that.router.navigateByUrl(that.urlCallback));
  }


  processError(err: any) {
    console.log(err);
  }
}
