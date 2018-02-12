import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../../user/services/user.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loaded = false;
  photoUrl = '';

  constructor(private authService: AuthService,
              private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser()
      .subscribe(user => {
        if (!isNullOrUndefined(user.photoUrl)) {
          this.photoUrl = user.photoUrl;
          this.loadedImage();
        }
      });
  }

  goTo(uri: string) {
    this.router.navigate([uri]);
  }

  logout() {
    this.authService.logout();
  }


  loadedImage() {
    this.loaded = true;
  }
}
