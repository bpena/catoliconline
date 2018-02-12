import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { isNullOrUndefined } from 'util';
import { User } from '../user/classes/user';
import { UserService } from '../user/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: Observable<firebase.User>;

  constructor(private fireAuth: AngularFireAuth,
              private userService: UserService) {
    this.user = this.fireAuth.authState;
  }

  ngOnInit() {
    this.user.subscribe(user => {
      const _user = new User();
      if (!isNullOrUndefined(user)) {
        const _userAuth: firebase.User = isNullOrUndefined(user['user']) ? user : user['user'];
        _user.setUser(_userAuth);
      }
      this.userService.setUser(_user);
    });
  }
}
