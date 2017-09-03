import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { ShoppingListRouterModule } from './shopping-list-router.module';

@NgModule({
  imports: [
    CommonModule,
		ShoppingListRouterModule,
		FormsModule
  ],
  declarations: [
		ShoppingListComponent,
		ShoppingListEditComponent
	]
})
export class ShoppingListModule { }
