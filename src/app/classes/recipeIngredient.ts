import {Recipe} from "./recipe";
import {Ingredients} from "./ingredients";

export class RecipeIngredient {
  public id: number | undefined;
  public quantity: string | undefined;
  public recipe: Recipe | undefined;
  public ingredient: Ingredients | undefined;
}
