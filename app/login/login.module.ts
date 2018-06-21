import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// I create new component - "authentication" component - in "login" module and now export it (exports: [AuthenticationComponent]) that
// for another components can see it
import { AuthenticationComponent } from './authentication/authentication.component';

// add this service to providers - and we can use it in login module (and login module - in other modules (see app.module.ts))
import {AuthenticationService} from './authentication.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [AuthenticationComponent],
  providers: [AuthenticationService],
  declarations: [AuthenticationComponent]
})
export class LoginModule { }
