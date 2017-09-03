import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import {AuthService} from '../../auth/auth.service';
import { Recipe } from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../../shared/Services/shopping-list.service';
import {RecipeService} from '../../shared/Services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
	recipe: Recipe;
  isAuthed: boolean = false;

	addToShoppingList(){
		this.slService.addToShoppingList(this.recipe.ingredients);
    this.toastr.success("Check 'Shopping List' for more", 'Ingredients added!');
	}

  constructor(private slService: ShoppingListService, private recipeService: RecipeService, private route: ActivatedRoute, private router: Router, private authService: AuthService, private toastr: ToastrService) {

  }

  ngOnInit() {
		// let id = +this.route.snapshot.params['id'];
		// this.recipe = this.recipeService.getRecipe(id); IF  YOU ARE SUBSCRIBING, YOU DON'T NEED THESE TWO LINES!
		this.route.params.subscribe((params: Params) => {
			this.recipe = this.recipeService.getRecipe(+params['id']);
		});

    this.authService.isAuthenticated() ? this.isAuthed = true : this.isAuthed = false;
  }

	onDeleteRecipe(){
		this.recipeService.deleteRecipe(+this.route.snapshot.params['id']);
		this.router.navigate(['../'], {relativeTo: this.route});
	}

}
