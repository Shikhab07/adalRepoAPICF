/**
 * Created by orjanertkjern on 24/04/2017.
 */
import { HomeComponent } from 'app/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './shared/utility/guard.service';



const APP_ROUTES: Routes = [

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },

];

export let AppRouterModule = RouterModule.forRoot(APP_ROUTES, { scrollPositionRestoration: 'enabled' });

