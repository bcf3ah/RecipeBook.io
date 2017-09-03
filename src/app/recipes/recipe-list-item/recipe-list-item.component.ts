import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../shared/Services/recipe.service';

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.css']
})
export class RecipeListItemComponent implements OnInit {
	@Input () recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

	// populateRecipeDetail(){
	// 	this.recipeService.recipeEmitter.emit(this.recipe);
	// }

  ngOnInit() {
  }

}
