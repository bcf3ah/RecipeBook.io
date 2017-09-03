import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { RecipesComponent } from '../recipes/recipes.component';
import { RecipeListComponent } from '../recipes/recipe-list/recipe-list.component';
import { RecipeListItemComponent } from '../recipes/recipe-list-item/recipe-list-item.component';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';
import { RecipePlaceholderComponent } from '../recipes/recipe-placeholder/recipe-placeholder.component';
import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component';
import { AuthGuardService } from '../auth/auth-guard.service';


const recipesRouter: Routes = [
	{path: '', component: RecipesComponent, children: [
		{path: '', component: RecipePlaceholderComponent},//functions like IndexRoute from React Router!
		{path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService]},
		{path: ':id', component: RecipeDetailComponent},
		{path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuardService]}
	]}
]

@NgModule({
	imports: [RouterModule.forChild(recipesRouter)],
	exports: [RouterModule],
	providers: [AuthGuardService]
})

export class RecipesRouterModule{}
