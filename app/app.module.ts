import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpModule} from '@angular/http';

// use insteed of HttpModule(it's deprecated)
import {HttpClientModule} from '@angular/common/http';

import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

// import custom module that we create: $ ng g module login
import {LoginModule} from './login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
