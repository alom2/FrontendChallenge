import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from '../app/components/app/app.component';
import { Header } from '../app/components/header/header';
import { Body } from '../app/components/body/body';
import { Home } from '../app/components/home/home';
import { Button } from '../app/components/button/button';
import { Sidebar } from '../app/components/sidebar/sidebar';

export const declarations = [
  AppComponent,
  Header,
  Body,
  Button,
  Sidebar,
  Home,
];

export const imports = [
  BrowserModule,
  FormsModule,
];