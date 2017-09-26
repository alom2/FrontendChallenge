import { Component, OnInit } from '@angular/core';

import { hasStorage, createStorage } from '../../../helpers/StorageHelper';

@Component({
  selector: 'body',
  host: {'class': 'lol-tournament'},
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  /**
   * start local storage if doesnt exists
   */
  ngOnInit() {
    if (!hasStorage()) {
        createStorage();
    }
  }

}
