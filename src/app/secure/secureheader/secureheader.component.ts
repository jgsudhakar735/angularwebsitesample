import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { MENU } from 'src/app/common/Menu/PreLoginMenu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secureheader',
  templateUrl: './secureheader.component.html',
  styleUrls: ['./secureheader.component.scss']
})
export class SecureheaderComponent implements OnInit {

  preloginMenu = MENU.POST_LOGIN_MENU.English;

  languages = Object.keys(MENU.POST_LOGIN_MENU)

  logoName = 'logoName'

  mediaSub: Subscription;
  deviceXs: boolean;

  constructor (public translate: TranslateService,public mediaObserver: MediaObserver,
    private router: Router) {
    translate.addLangs(['en', 'te']);
    translate.setDefaultLang('en');
    this.deviceXs = false;
    this.mediaSub = mediaObserver.media$.subscribe ((res: MediaChange) => {
      this.deviceXs = res.mqAlias == 'xs' ? true : false;
    })
  }

  ngOnInit() {
    this.mediaSub = this.mediaObserver.media$.subscribe((res: MediaChange) => {
      console.log(res.mqAlias);
      this.deviceXs = res.mqAlias == 'xs' ? true : false;
    })
  }

  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }

  changeLanguage(lang) {
    this.translate.use(lang == 'English' ? 'en': 'te');
  }

  logout() {
    localStorage.setItem("isLoggedIn","false")
    this.router.navigate([""]);
  }

}
