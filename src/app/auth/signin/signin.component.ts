import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

	@ViewChild('f') form: NgForm;
  errorMessage:string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.errorEmitter.subscribe(message => {
      this.errorMessage = message;
    });
  }

	onSignin(){
		const email = this.form.value.email;
		const password = this.form.value.password;
		this.authService.signin(email, password);
	}

}
