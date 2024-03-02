import { Injectable } from '@angular/core';
// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// Other imports
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Type } from '../classes/type';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(
    private http: HttpClient
  ) { }



  getAll():Observable<Type[]>{
    return this.http.get<Type[]>( environment.apiUrl + '/types');
  }
}
