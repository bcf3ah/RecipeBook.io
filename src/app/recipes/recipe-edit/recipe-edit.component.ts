import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {ReactiveFormsModule, FormGroup, FormControl, FormArray, Validators} from '@angular/forms';
import {HttpService} from '../../shared/Services/http.service';

import {RecipeService} from '../../shared/Services/recipe.service';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
	id: number;
	editMode: boolean = false;
	recipeForm: FormGroup;
  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router, private httpService: HttpService) { }

  ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.id = +params['id'];
			this.editMode = params['id'] != null; //in other words, if the url has an id parameter, this returns true, so yes, we are in editMode. Otherwise, we are in 'new' mode
			this.formInit();//update the form whenever the params change
		});
  }

	onAddIngredient(){
		(<FormArray>this.recipeForm.get('ingredients')).push(
			new FormGroup({
				'name': new FormControl(null, Validators.required),
				'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
			})
		)
	}

	onSubmit(){
		const newRecipe = new Recipe(
			this.recipeForm.value['name'],
			this.recipeForm.value['description'],
			this.recipeForm.value['imagePath'],
			this.recipeForm.value['ingredients']
		)
		if(this.editMode){
			this.recipeService.updateRecipe(this.id, newRecipe); //could also just pass this.recipeForm.value and it'll include everything from the form in one blow!!!
		} else {
			this.recipeService.addRecipe(newRecipe);
		}

		this.onCancel();
	}

	private formInit(){
		let recipe = this.recipeService.getRecipe(this.id);
		let recipeName = '';
		let recipeImagePath = '';
		let recipeDescription = '';
		let recipeIngredients = new FormArray([]);

		if(this.editMode){
			recipeName = recipe.name;
			recipeImagePath = recipe.imagePath;
			recipeDescription = recipe.description;
			if(recipe['ingredients']){
				for (let ingredient of recipe.ingredients) {
					recipeIngredients.push(new FormGroup({
						'name': new FormControl(ingredient.name, Validators.required),
						'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
					}))
				}
			}
		}

		this.recipeForm = new FormGroup({
			'name': new FormControl(recipeName, Validators.required),
			'imagePath': new FormControl(recipeImagePath, Validators.required),
			'description': new FormControl(recipeDescription, Validators.required),
			'ingredients': recipeIngredients
		})
	}

	onCancel(){
		this.router.navigate(['../'], {relativeTo: this.route});
	}

	onDeleteIngredient(index: number){
		(<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
	}

	getIngredientsArray(){
		return (<FormArray>this.recipeForm.get('ingredients')).controls;
	}

}
