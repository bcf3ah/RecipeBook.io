import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../shared/Services/recipe.service';
import {Subscription} from 'rxjs/Subscription';

import { HttpService } from '../../shared/Services/http.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
	recipes: Recipe[];
	subscription: Subscription;
  isAuthed: boolean = false;

  constructor(private recipeService: RecipeService, private httpService: HttpService, private authService: AuthService) { }

  ngOnInit() {
		this.subscription = this.recipeService.recipesChanged.subscribe((recipes: Recipe[]) => {
			this.recipes = recipes;
		});

    this.httpService.fetchData().subscribe(
			(recipes: Recipe[]) => {
				this.recipeService.setRecipes(recipes);
        this.recipes = recipes;
			},
			(error) => {
				console.log(error);
			}
		);

    this.authService.isAuthenticated() ? this.isAuthed = true : this.isAuthed = false;
  }

	ngOnDestroy(){
		this.subscription.unsubscribe();
	}

}
