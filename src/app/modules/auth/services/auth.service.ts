import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private firebaseAuth: AngularFireAuth,
              private router: Router) {
    this.user = firebaseAuth.authState;

    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
        } else {
          this.userDetails = null;
        }
      }
    );
  }


  signInWithTwitter() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.TwitterAuthProvider()
    );
  }


  signInWithFacebook() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    );
  }

  signInWithGoogle() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  signInWithGithub() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GithubAuthProvider()
    );
  }

  isLoggedIn() {
    return !isNullOrUndefined(this.userDetails);
  }


  logout() {
    this.firebaseAuth.auth.signOut()
      .then(() => this.router.navigate(['auth/login']));
  }
}
