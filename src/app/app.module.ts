import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {TourMatMenuModule} from 'ngx-tour-md-menu';
import {MaterialModule} from "../fw/modules/material-module/material-module.module";
import {FrameworkModule} from '../fw/fw.module';
import {InitTourService} from "./services";
import {LandingModule} from "./landing/landing.module";
import {AuthenticationService} from "./services/authentication.service";
import {UserApi} from "../fw/users/user-api";
import {AuthenticatedUserComponent} from "./authenticated-user/authenticated-user.component";
import {AboutComponent} from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticatedUserComponent,
    AboutComponent
  ],
  imports: [
    TourMatMenuModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FrameworkModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LandingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [

  ],
  providers: [
    AuthenticationService,
    InitTourService,
    { provide: UserApi
      , useExisting: AuthenticationService
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
