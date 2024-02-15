import { Routes } from '@angular/router';
import {MenuComponent} from "./internal/menu/menu.component";
import {TypeComponent} from "./internal/type/type.component";
import {RecipeComponent} from "./internal/recipe/recipe.component";

export const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'tipo/:type', component: TypeComponent},
  {path: 'tipo/:type/:id', component: RecipeComponent}
];
