import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './mapping-data/producs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _product_url:string = "/assets/data/products.json"
  constructor(private _http:HttpClient) { }


  // All products
  // Instead of defining the http.get in a method in the service,
  // set the observable directly
  products$ = this._http.get<Product[]>(this._product_url);
}
