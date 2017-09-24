import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from '../app/components/app/app.component';
import { Header } from '../app/components/header/header';
import { Body } from '../app/components/body/body';
import { Home } from '../app/components/home/home';
import { Button } from '../app/components/button/button';
import { Sidebar } from '../app/components/sidebar/sidebar';
import { Team } from '../app/components/team/team';
import { Key } from '../app/components/key/key';
import { Winner } from '../app/components/winner/winner';

export const declarations = [
  AppComponent,
  Header,
  Body,
  Button,
  Sidebar,
  Home,
  Team,
  Winner,
  Key,
];

export const imports = [
  BrowserModule,
  FormsModule,
];