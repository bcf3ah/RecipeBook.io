import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {Router, Event, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private router: Router){}

  isLandingPage:boolean = false;

	ngOnInit(){
		firebase.initializeApp({
			apiKey: "AIzaSyAKMMEZXCjzTaqHvc4bHgG4gkkcCiUkbL0",
    	authDomain: "recipebook-32005.firebaseapp.com",
		})

    //set background if landing page using ternary CSS class
    this.router.events.subscribe((event:Event) => {
      if(event instanceof NavigationEnd){
        event.url === "/" ? this.isLandingPage=true : this.isLandingPage = false;
      }
    })
	}
}
