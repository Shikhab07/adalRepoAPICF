import { TranslateService } from '@ngx-translate/core';
import {Component, OnInit} from '@angular/core';
import { AdalService } from './adal.service';

@Component({
  selector: 'boilerplate-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private translate: TranslateService, private adal : AdalService) {
    translate.addLangs(['en']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(){
    this.adal.handleWindowCallback();
  }
}
