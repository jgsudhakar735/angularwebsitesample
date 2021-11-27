import { Component, OnInit } from '@angular/core';
import { MENU } from 'src/app/common/Menu/PreLoginMenu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  preloginMenu = MENU.PRELOGIN_MENU;

  constructor() {

   }

  ngOnInit(): void {
  }

}
