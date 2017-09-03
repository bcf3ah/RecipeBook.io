import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

import { AppComponent } from '../app.component';
import { HeaderComponent } from '../core/header/header.component';
import { RecipesComponent } from '../recipes/recipes.component';
import { RecipeListComponent } from '../recipes/recipe-list/recipe-list.component';
import { RecipeListItemComponent } from '../recipes/recipe-list-item/recipe-list-item.component';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';
import { DropdownDirective } from './Directives/dropdown.directive';
import { ShoppingListService } from './Services/shopping-list.service';
import { RecipePlaceholderComponent } from '../recipes/recipe-placeholder/recipe-placeholder.component';
import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component';
import { HomeComponent } from '../core/home/home.component';

const appRouter: Routes = [
	{path: '', component: HomeComponent},
	{path: 'recipes', loadChildren: '../recipes/recipes.module#RecipesModule'},
	{path: 'shopping-list', loadChildren: '../shopping-list/shopping-list.module#ShoppingListModule'}
]

@NgModule({
	imports: [RouterModule.forRoot(appRouter, {preloadingStrategy: PreloadAllModules})],
	exports: [RouterModule]
})

export class AppRouterModule{}
