import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { MENU } from 'src/app/common/Menu/PreLoginMenu';

@Component({
  selector: 'app-securenav',
  templateUrl: './securenav.component.html',
  styleUrls: ['./securenav.component.scss']
})
export class SecurenavComponent implements OnInit, OnDestroy {

  postloginMenu = MENU.POST_LOGIN_MENU.English;

  mediaSub: Subscription;
  deviceXs: boolean;

  constructor (public translate: TranslateService,public mediaObserver: MediaObserver) {
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
}
