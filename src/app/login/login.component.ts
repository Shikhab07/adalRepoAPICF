
import { Component, AfterViewChecked } from '@angular/core';
import { AdalService } from '../adal.service';
import { AuthService } from '../shared/utility/auth.service';
import { Router } from '@angular/router';


@Component({
    selector: 'boilerplate-app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements AfterViewChecked {

    checkCount = 0;
    constructor(private adal: AdalService, private authService: AuthService,
        private router: Router) {
       console.log(router.url);
    }

    ngAfterViewChecked() {
        if (this.adal.isAuthenticated && this.checkCount === 0) {
            this.checkCount = -1;
            this.setProfileData(this.adal.user);
            const link = [''];
            this.router.navigate(link);
        }
    }

    login() {
        this.adal.login();
    }

    setProfileData(data: any) {
        const profiledata = {
            userId: data.profile.unique_name,
            userName: data.profile.email,
            token: data.token,
        };
        this.authService.setProfile(profiledata);

    }

}
