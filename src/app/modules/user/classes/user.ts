import * as firebase from 'firebase/app';

export class User {
  username: string;
  displayName?: string;
  email?: string;
  photoUrl?: string;
  password: string;
  firstName?: string;
  lastName?: string;
  birthDate?: string;
  nationality?: string;

  setUser?(user: firebase.User) {
    this.photoUrl = user.photoURL;
    this.username = user.email;
    this.email = user.email;
    this.displayName = user.displayName;
  }
}
