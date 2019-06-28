import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { isNullOrUndefined } from 'util';
import { AuthInfo } from './authInfo';



@Injectable()
export class AuthService {
 
  constructor(private router: Router) {
  }

  // remove token
  removeItem(key): boolean {
    localStorage.removeItem(key);
    localStorage.clear();
    return true;
  }

  getProfile(): any {
    const profile = localStorage.getItem('profile');
    return !isNullOrUndefined(profile) ? JSON.parse(profile) : null;
  }

  setProfile(data) {
    const authObj: AuthInfo = {
      userId: data.userId ? data.userId : '',
      userName: data.userName,
      companyName: data.company ? data.company : '',
      familyName: data.profile ? data.profile.family_name : '',
      givenName: data.profile ? data.profile.given_name : '',
      name: data.profile ? data.profile.name : '',
      token: data.token,
      isAdmin: data.isAdmin ? data.isAdmin : false,
      isPartnerUser: data.isPartnerUser ? data.isPartnerUser : false,
      isGuest: data.isGuest ? data.isGuest : false,
      groups: data.groups,
    };


    localStorage.setItem('profile', JSON.stringify(authObj));

  }

  getIsAdmin(): any {
    const profile = this.getProfile();
    return (profile !== null) ? profile.isAdmin : false;
  }

}
