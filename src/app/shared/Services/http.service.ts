import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { Recipe } from '../../recipes/recipe.model';
import { RecipeService } from './recipe.service';
import { AuthService } from '../../auth/auth.service';

@Injectable()
export class HttpService {

  constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) { }

	saveData(recipes: any[]){
		const token = this.authService.getToken();
		return this.http.put('https://recipebook-32005.firebaseio.com/recipes.json?auth='+token, recipes);
	}

	fetchData(){
		const token = this.authService.getToken();
		return this.http.get('https://recipebook-32005.firebaseio.com/recipes.json?auth='+token).map(
			(response: Response) => {
				const recipes: Recipe[] = response.json();
				for (let recipe of recipes){
					if(!recipe['ingredients']){
						recipe['ingredients'] = []; //to make sure the models in the database have an ingredients array, so it follows the Recipe interface model
					}
				}
				return recipes;
			}
		);
	}
}
