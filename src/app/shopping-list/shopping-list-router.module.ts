import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListEditComponent } from '../shopping-list/shopping-list-edit/shopping-list-edit.component';

const shoppingListRouter: Routes = [
	{path: '', component: ShoppingListComponent, children: [
		{path: 'edit', component: ShoppingListEditComponent}
	]},
]

@NgModule({
  imports: [RouterModule.forChild(shoppingListRouter)],
  exports: [RouterModule]
})
export class ShoppingListRouterModule { }
