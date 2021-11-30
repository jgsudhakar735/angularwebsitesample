import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-securelayout',
  templateUrl: './securelayout.component.html',
  styleUrls: ['./securelayout.component.scss']
})
export class SecurelayoutComponent implements OnInit , OnDestroy{

  mediaSub: Subscription;
  deviceXs: boolean;

  constructor(public mediaObserver: MediaObserver) {
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
