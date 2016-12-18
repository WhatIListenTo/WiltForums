import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes';
import {
  HttpModule,
  Headers,
  BaseRequestOptions,
  XSRFStrategy,
  CookieXSRFStrategy,
  RequestOptions
} from '@angular/http';


import { AppComponent } from './app.component';

// (Route) Components
import { HomeComponent } from './components/home/home.component';

// Services
import { HttpService, DataService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    HttpService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
