import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipes/recipe.model';
import {Ingredient}from '../ingredient.model';
import {Subject} from 'rxjs/Subject';



@Injectable()
export class RecipeService {


	recipesChanged = new Subject<Recipe[]>();

	private recipes: Recipe[] = [
		new Recipe(
			'Kale Salad',
			'Healthy AND Delicious!',
			'https://www.gimmesomeoven.com/wp-content/uploads/2014/01/Kale-Cranberry-Salad-1.jpg',
			[
				new Ingredient('Basil', 10),
				new Ingredient('Salt', 5)
			]
		),
		new Recipe(
			'Cobb Salad',
			'No more blue cheese for me!', 'https://pioneerwoman.files.wordpress.com/2014/06/14495013603_52c876fdfd_o.jpg?w=630&h=419',
			[
				new Ingredient('Cinnamon', 20),
				new Ingredient('Ginger', 30)
			]
		)
	];

	setRecipes(recipes: Recipe[]){
		this.recipes = recipes;
		this.recipesChanged.next(this.recipes.slice());
	}

	getRecipes(){
		return this.recipes.slice(); //to return a copy of the CURRENT array, in case it changes
	}

	getRecipe(id: number){
		return this.recipes[id];
	}

	addRecipe(recipe: Recipe){
		this.recipes.push(recipe);
		this.recipesChanged.next(this.recipes.slice());
	}

	updateRecipe(index: number, newRecipe: Recipe){
		this.recipes[index] = newRecipe;
		this.recipesChanged.next(this.recipes.slice());
	}

	deleteRecipe(index: number){
		this.recipes.splice(index, 1);
		this.recipesChanged.next(this.recipes.slice());
	}
}
