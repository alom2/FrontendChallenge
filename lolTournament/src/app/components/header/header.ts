import { Component } from '@angular/core';

import { AppState } from '../../../stores/AppState';
import { IAppState } from '../../../interfaces/IAppState';

@Component({
  selector: 'main-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header {
  title:string = 'League of Tournament';
  AppState: IAppState = AppState;
  buttonText:string = "Close";

  /**
   * Toggles sidebar using AppState
   */
  toggleSidebar() {
    this.AppState.sidebarIsOpen = !this.AppState.sidebarIsOpen;
    this.buttonText = (this.AppState.sidebarIsOpen) ? 'Close' : 'Edit';
  }

}
