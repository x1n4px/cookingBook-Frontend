import {Component, OnInit} from '@angular/core';
import {RecipeService} from "../../services/recipe.service";
import {Recipe} from "../../classes/recipe";
import {Type} from "../../classes/type";
import {TypeService} from "../../services/type.service";
import {Ingredients} from "../../classes/ingredients";
import {FormsModule} from "@angular/forms";
import {IngredientService} from "../../services/ingredient.service";
import {RecipeIngredient} from "../../classes/recipeIngredient";

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements  OnInit{
  recipe: Recipe[] = [];
  pickedType: Recipe [] = [];
  type: Type[] = [];

  ingredients: Ingredients[] = [];
  selectIngredients: Ingredients = new Ingredients();

  quantity: string = '';

  searchValue: string = '';
  newRecipe: Recipe = new Recipe();

  recipeIngredient: RecipeIngredient[] = [];
  constructor(
    private recipeService: RecipeService,
    private typeService: TypeService,
    private ingredientService: IngredientService
  ) {}

  ngOnInit() {
    this.getAll();
    this.getAlIngredients();
  }

  onButtonClick(item: any) {
    // Si el elemento ya está seleccionado, eliminarlo
    if (this.pickedType.includes(item)) {
      this.pickedType = this.pickedType.filter(i => i !== item);
    } else {
      // Si no está seleccionado, agregarlo
      this.pickedType.push(item);
    }
  }

  isItemSelected(item: any): boolean {
    return this.pickedType.includes(item);
  }

  filterOptions(value: string): Ingredients[] {
    return this.ingredients.filter(option => option.name != undefined &&  option.name.toLowerCase().includes(value.toLowerCase()));
  }


  addIngredient() {
     const ri: RecipeIngredient = new RecipeIngredient();
     ri.ingredient = this.selectIngredients;
     ri.quantity = this.quantity;
     console.log(ri)
      this.recipeIngredient.push(ri);
     console.log(this.recipeIngredient)
  }



  compareById(item1: any, item2: any) {
    if (!item1 && !item2) {
      return true;
    }
    return item1 && item2 && item1.id == item2.id;
  }


  getAll() {
    this.typeService.getAll().subscribe(
      data => {
        this.type = data;
      },
      error => {
        console.log(error);
      }
    )
  }


  getAlIngredients() {
    this.ingredientService.getAll().subscribe(
      data => {
        this.ingredients = data;
      },
      error => {
        console.log(error);
      }
    )

  }



  create() {
    this.recipeService.create(this.newRecipe).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }

 }
