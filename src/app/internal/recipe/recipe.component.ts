import { Component } from '@angular/core';
import {Recipe} from "../../classes/recipe";
import {Ingredients} from "../../classes/ingredients";
import {RecipeService} from "../../services/recipe.service";
import {ActivatedRoute, Router} from "@angular/router";
import {RecipeIngredient} from "../../classes/recipeIngredient";
import {FormsModule} from "@angular/forms";
import {Testimonials} from "../../classes/testimonials";

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {

  recipe: Recipe = new Recipe() ;
  recipeIngredient: RecipeIngredient[] = [];
  testimonials: Testimonials[] = [];
  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
     if(id !== undefined ) {
      this.getById(id);
      this.getIngredient(id);
      this.getTestimonials(id);
    }
  }

  getById(id: string|undefined|null) {
    this.recipeService.getById(id).subscribe(
      data => {
        this.recipe = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }

  getIngredient(id: string|undefined|null) {
    this.recipeService.getIngredient(id).subscribe(
      data => {
        this.recipeIngredient = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }

  getTestimonials(id: string|undefined|null) {
    this.recipeService.getTestimonials(id).subscribe(
      data => {
        this.testimonials = data;
        this.rating = this.calculateAverage();

        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }

  calculateAverage() {
    let sumFlavor = 0;
    let sumTexture = 0;
    let sumPresentation = 0;
    let count = 0;

    this.testimonials.forEach((testimony) => {
      if (typeof testimony.flavor === 'number') {
        sumFlavor += testimony.flavor;
        count++;
      }
      if (typeof testimony.texture === 'number') {
        sumTexture += testimony.texture;
      }
      if (typeof testimony.presentation === 'number') {
        sumPresentation += testimony.presentation;
      }
    });

    if (count === 0) {
      return 0; // Evitar división por cero si no hay testimonios válidos
    }

    const averageFlavor = sumFlavor / count;
    const averageTexture = sumTexture / count;
    const averagePresentation = sumPresentation / count;

    const average = (averageFlavor + averageTexture + averagePresentation) / 3;
    console.log(Math.floor(average))
    return Math.floor(average);
  }



  rating: number = 5;



}
