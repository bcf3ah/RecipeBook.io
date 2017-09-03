import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingListService } from '../shared/Services/shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
	constructor(private shoppingListService: ShoppingListService) { }
	ingredients: Ingredient[];
	ingredientsSubscription: Subscription;
  ngOnInit() {
		this.ingredients = this.shoppingListService.getIngredients();
		this.ingredientsSubscription = this.shoppingListService.ingredientEmitter.subscribe((ingredients: Ingredient[]) => {
			this.ingredients = ingredients;
		})
  }

	onEditItem(index: number){
		this.shoppingListService.editItem.next(index);
	}

	ngOnDestroy(){
		this.ingredientsSubscription.unsubscribe();
	}

}
