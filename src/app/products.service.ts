import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './mapping-data/producs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _product_url:string = "/assets/data/products.json"
  constructor(private http:HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this._product_url);
  }
}
