import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {
  user: User;
  userObservable: BehaviorSubject<User>;

  constructor() {
    this.user = new User();
    this.userObservable = new BehaviorSubject(this.user);
  }

  setUser(user: User) {
    this.user = user;
    this.userObservable.next(this.user);
  }

  getUser(): BehaviorSubject<User> {
    return this.userObservable;
  }
}
