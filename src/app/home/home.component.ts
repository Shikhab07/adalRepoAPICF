import { Component, OnInit } from '@angular/core';
import { AdalService } from '../adal.service';
import { AuthService } from '../shared/utility/auth.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'boilerplate-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./shared/home.component.scss'],
})
export class HomeComponent implements OnInit {
  today: Date;

  constructor(private adalService: AdalService, private authService: AuthService) {
  }

  ngOnInit() {
    this.today = new Date();
  }

  logout() {
    this.adalService.logout();
    const profile = this.authService.getProfile();
    if (!isNullOrUndefined(profile)) {
      localStorage.removeItem(profile.userId + '-rights');
    }
    // remove redirecturl from storage
    const redirectUrl = localStorage.getItem('redirectUrl');
    if (!isNullOrUndefined(redirectUrl)) {
      localStorage.removeItem('redirectUrl');
    }
    localStorage.removeItem('profile');
  }
}
