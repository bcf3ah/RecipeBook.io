import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { HttpService } from '../../shared/Services/http.service';
import { RecipeService } from '../../shared/Services/recipe.service';
import { Recipe } from '../../recipes/recipe.model';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	@Output() router = new EventEmitter<string>();
	recipes: Recipe[];
	constructor(private httpService: HttpService, private recipeService: RecipeService, public authService: AuthService) { }

	chooseRoute(route: string){
		this.router.emit(route);
	}

	onLogout(){
		this.authService.logout();
	}

  ngOnInit() {
		this.recipes = this.recipeService.getRecipes();
		this.recipeService.recipesChanged.subscribe((recipes: Recipe[]) => {
			this.recipes = recipes;
		})
  }

	public isCollapsed = false;

}
