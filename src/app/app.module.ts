import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http'

//Routes
import { APP_ROUTING } from './app.routes';

//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared-components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ImgixappComponent } from './components/imgixapp/imgixapp.component';
import { AboutComponent } from './components/about/about.component';
import { ImgixAngularModule } from '@imgix/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    ImgixappComponent,
    AboutComponent,
  ],
  imports: [
    APP_ROUTING,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ImgixAngularModule.forRoot({
      domain: '<labtestt.imgix.net>',
      /* Add more imgix config here, see the API section for a full list of options */
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
