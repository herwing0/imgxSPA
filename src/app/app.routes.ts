import { Component } from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import { HomepageComponent } from './components/homepage/homepage.component';

const APP_ROUTES: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'routePath', component: Component},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

