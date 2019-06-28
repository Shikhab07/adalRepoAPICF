// app component
import { AppComponent } from './app.component';
// Module
import { SharedModule } from 'app/shared/index.shared';
import { AppRouterModule } from 'app/app.routes';
import { HomeModule } from 'app/home/index.home';
import { ErrorModule } from 'app/error/index.error';
import { FormGroupModule } from 'app/form-group/index.form-group';
import { GoogleMaterialModule } from 'app/google-material/index.material';
import { TableModule } from 'app/responsive_table/index.responsive';
import { NavigationDestinationModule } from 'app/navigation-destination/index.navigation';
// translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { AppConfigService, appConfigServiceInitializerFactory } from './app.config.service';
import { AdalService } from './adal.service';
import { AuthGuardService } from './shared/utility/guard.service';
import { AuthService } from './shared/utility/auth.service';

// create loader for translation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    SharedModule,
    AppRouterModule,
    BrowserAnimationsModule,
    ErrorModule,
    FormGroupModule,
    GoogleMaterialModule,
    HomeModule,
    NavigationDestinationModule,
    TableModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [],
  providers: [
    AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: appConfigServiceInitializerFactory,
      deps: [AppConfigService],
      multi: true
    },
    AdalService,
    AuthGuardService,
    AuthService
  ],
  bootstrap: [AppComponent],
})

export class AppModule {
}
