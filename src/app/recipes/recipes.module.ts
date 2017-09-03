import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeListItemComponent } from './recipe-list-item/recipe-list-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipePlaceholderComponent } from './recipe-placeholder/recipe-placeholder.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesRouterModule } from './recipes-router.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [
		RecipesComponent,
    RecipeListComponent,
    RecipeListItemComponent,
    RecipeDetailComponent,
		RecipePlaceholderComponent,
		RecipeEditComponent
	],
	imports: [
		ReactiveFormsModule,
		CommonModule,
		RecipesRouterModule,
		SharedModule
	]
})
export class RecipesModule {

}
