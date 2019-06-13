import { Category } from './mapping-data/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoriesService {
  private _category_url = "/assets/data/categories.json"

  constructor(private _http:HttpClient) { }


    // All Categories
  // Instead of defining the http.get in a method in the service,
  // set the observable directly
  categories$:Observable<Category[]> =  this._http.get<Category[]>(this._category_url);
}
