import { Injectable, EventEmitter } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
	token: string;
  constructor(private router: Router) { }

	errorEmitter = new EventEmitter<String>();

	signup(email: string, password: string){
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(response => this.router.navigate(['/recipes']))
					.catch(error => {this.errorEmitter.emit(error.message);});
	}

	signin(email: string, password: string){
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(response => {
				firebase.auth().currentUser.getToken().then(token => {
					this.token = token;
				});
				this.router.navigate(['/recipes']);
			})
			.catch(error => {this.errorEmitter.emit(error.message);});
	}

	getToken(){
		firebase.auth().currentUser.getToken()
			.then((token: string) => {
				this.token = token;
			})
		return this.token;
	}

	isAuthenticated(){
		return (this.token != null);
	}

	logout(){
		firebase.auth().signOut();
		this.token = null;
		this.router.navigate(['/']);
	}
}
