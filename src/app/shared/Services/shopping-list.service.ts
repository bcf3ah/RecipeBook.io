import { Injectable } from '@angular/core';
import { Ingredient } from '../ingredient.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ShoppingListService {
	private ingredients: Ingredient[] = [
		new Ingredient('Oregano', 12),
		new Ingredient('Chicken breasts', 3)
	];

	ingredientEmitter = new Subject<Ingredient[]>();

	addIngredient(ingredient: Ingredient){
		this.ingredients.push(ingredient);
		this.ingredientEmitter.next(this.ingredients.slice());
	}

	addToShoppingList(ingredients: Ingredient[]){
		this.ingredients.push(...ingredients);
		this.ingredientEmitter.next(this.ingredients.slice());
	}

	getIngredients(){
		return this.ingredients.slice();
	}

	getIngredient(index: number){
		return this.ingredients[index];
	}

	editItem = new Subject<number>();

	updateIngredient(index: number, newIngredient: Ingredient){
			this.ingredients[index] = newIngredient;
			return this.ingredientEmitter.next(this.ingredients.slice());
	}

	deleteIngredient(index: number){
		this.ingredients.splice(index, 1);
		return this.ingredientEmitter.next(this.ingredients.slice());
	}

  constructor() { }

}
