import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap} from "rxjs";
import {RecipeService} from "../../services/recipe.service";
import {Recipe} from "../../classes/recipe";

@Component({
  selector: 'app-type',
  standalone: true,
  imports: [],
  templateUrl: './type.component.html',
  styleUrl: './type.component.css'
})
export class TypeComponent {
  type: any;
  recipe: Recipe[] = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {
  }

  ngOnInit() {
    this.type = this.route.snapshot.paramMap.get('type');

    if(this.type !== 'all') {
      console.log(this.type);
      this.getByType(this.type);
    }else{
      this.getAll();
    }

  }


  getAll() {
    this.recipeService.getAll().subscribe(
      data => {
        this.recipe = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }

  getByType(type:string) {
    this.recipeService.getByType(type).subscribe(
      data => {
        this.recipe = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }

  routeTo(str: number|undefined) {
    console.log(str)
     this.router.navigate([`tipo/${this.type}/`, str])
  }
}
