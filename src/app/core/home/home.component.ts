import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService:AuthService) { }

  isAuthenticated: boolean = false;

  ngOnInit() {
    this.authService.isAuthenticated() ? this.isAuthenticated = true : this.isAuthenticated = false;
  }

}
