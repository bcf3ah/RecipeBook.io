import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shared/Services/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
	@ViewChild('form') form: NgForm;
	errorMessage = '';
	subscription: Subscription;
	editMode = false;
	editedItemIndex: number;
	editedItem: Ingredient;
	addIngredient(){
		// if(!this.inputName.nativeElement.value || !this.inputAmount.nativeElement.value){
		// 	this.errorMessage = 'Both fields are required!';
		// } else {
		// 	let newIngredient = new Ingredient(this.inputName.nativeElement.value, this.inputAmount.nativeElement.value);
		// 	this.shoppingListService.addIngredient(newIngredient);
		// 	this.inputName.nativeElement.value = '';
		// 	this.inputAmount.nativeElement.value = '';
		// }
		const newIngredient = new Ingredient(this.form.value.name, this.form.value.amount);
		if(!this.editMode){
			this.shoppingListService.addIngredient(newIngredient);
			this.form.reset();
		} else {
			this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
			this.form.reset();
			this.editMode = false;
		}
	}

	clearInputs(){
		this.form.reset();
		this.editMode = false;
	}

	deleteIngredient(){
		this.shoppingListService.deleteIngredient(this.editedItemIndex);
		this.form.reset();
		this.editMode = false;
	}

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
		this.subscription = this.shoppingListService.editItem.subscribe((index: number) => {
			this.editMode = true;
			this.editedItemIndex = index;
			this.editedItem = this.shoppingListService.getIngredient(index);
			this.form.setValue({
				name: this.editedItem.name,
				amount: this.editedItem.amount
			})
		})
  }

	ngOnDestroy(){
		this.subscription.unsubscribe();
	}

}
