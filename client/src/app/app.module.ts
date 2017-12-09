import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {AUTH_PROVIDERS} from 'angular2-jwt';

import {AuthService} from "./services/auth.service";
import {routes} from './app.routes';
import {AppComponent} from "./components/app/app.component";
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {AdminComponent} from "./components/admin/admin.component";
import {Error404Component} from "./components/error404/error404.component";
import { NavComponent } from './components/common/nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    Error404Component,
    NavComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule.withServerTransition({appId: 'ame'}),
    FormsModule,
    RouterModule.forRoot(
      routes,
      {
        //enableTracing: true, // debug only
        useHash: false
      })
  ],
  providers: [
    AuthService,
    ...AUTH_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
