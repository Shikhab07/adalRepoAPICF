// Component
import { HomeComponent } from 'app/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'app/shared/utility/guard.service';

const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuardService]
  },
];

export let HomeRouterModule = RouterModule.forRoot(HOME_ROUTES);
