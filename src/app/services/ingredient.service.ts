import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Recipe} from "../classes/recipe";
import {Ingredients} from "../classes/ingredients";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(
    private http: HttpClient
  ) { }



  getAll():Observable<Ingredients[]>{
    return this.http.get<Ingredients[]>(environment.apiUrl + '/ingredient');
  }
}
