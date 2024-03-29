import { Injectable } from '@angular/core';
// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// Other imports
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Type } from '../classes/type';
import { Observable } from 'rxjs';
import {Recipe} from "../classes/recipe";
import {RecipeIngredient} from "../classes/recipeIngredient";
import {Testimonials} from "../classes/testimonials";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(
    private http: HttpClient
  ) { }



  getAll():Observable<Recipe[]>{
    return this.http.get<Recipe[]>(environment.apiUrl + `/recipe`);
  }

  getByType(type: string):Observable<Recipe[]>{
    return this.http.get<Recipe[]>(environment.apiUrl + `/recipe/${type}`);
  }

  getById(id:string|undefined|null): Observable<Recipe> {
    return this.http.get<Recipe>(environment.apiUrl + `/recipe/id/${id}`);
  }

  getIngredient(id:string|undefined|null): Observable<RecipeIngredient[]> {
    return this.http.get<RecipeIngredient[]>(`http://localhost:8080/api/recipe/${id}/ingredient`);
  }

  getTestimonials(id:string|undefined|null): Observable<Testimonials[]> {
    return this.http.get<Testimonials[]>(`http://localhost:8080/api/recipe/${id}/testimonials`);
  }

  create(recipe: Recipe): Observable<any> {
    return this.http.post<any>(environment.apiUrl + `/recipe`, recipe);
  }


}
