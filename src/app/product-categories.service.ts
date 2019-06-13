import { category } from './mapping-data/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoriesService {
  private _category_url = "/assets/data/categories.json"

  constructor(private _http:HttpClient) { }

  getCategories():Observable<category[]>{
    return this._http.get<category[]>(this._category_url);
  }
}
