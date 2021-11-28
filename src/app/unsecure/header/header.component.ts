import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MENU } from 'src/app/common/Menu/PreLoginMenu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy{

  preloginMenu = MENU.PRELOGIN_MENU.English;

  languages = Object.keys(MENU.PRELOGIN_MENU)

  @Input() deviceXs: boolean;

  logoName = 'logoName'

  constructor (public translate: TranslateService) {
    translate.addLangs(['en', 'te']);
    translate.setDefaultLang('en');
  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

  changeLanguage(lang) {
    this.translate.use(lang == 'English' ? 'en': 'te');
  }
}
