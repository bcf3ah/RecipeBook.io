import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { HeaderComponent } from './header/header.component';
import { HomeComponent} from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRouterModule } from '../shared/app-router.module';
import { RecipeService } from '../shared/Services/recipe.service';
import { HttpService } from '../shared/Services/http.service';
import { AuthService } from '../auth/auth.service';
import { ShoppingListService } from '../shared/Services/shopping-list.service';

@NgModule({
	declarations: [
		HeaderComponent,
		HomeComponent
	],
	imports: [
		AppRouterModule,
		SharedModule,
		NgbModule
	],
	exports: [
		AppRouterModule,
		HeaderComponent,
		NgbModule
	],
	providers: [ShoppingListService, RecipeService, HttpService, AuthService]
})
export class CoreModule {}
