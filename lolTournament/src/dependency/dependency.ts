import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app/components/app/app.component';
import { Header } from '../app/components/header/header';
import { Body } from '../app/components/body/body';
import { Home } from '../app/components/home/home';
import { Button } from '../app/components/button/button';

export const declarations = [
  AppComponent,
  Header,
  Body,
  Button,
  Home,
];

export const imports = [
  BrowserModule,
];