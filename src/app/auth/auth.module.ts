import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AuthRouterModule } from './auth-router.module';

@NgModule({
  imports: [
    CommonModule,
		AuthRouterModule,
		FormsModule
  ],
  declarations: [
		SignupComponent,
		SigninComponent
	]
})
export class AuthModule { }
