import { Category } from './mapping-data/category';
import { ProductCategoriesService } from './product-categories.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './mapping-data/producs';
import { combineLatest } from 'rxjs';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _product_url:string = "/assets/data/products.json"
  constructor(private _http:HttpClient, private _productCategories:ProductCategoriesService) { }


  // All products
  // Instead of defining the http.get in a method in the service,
  // set the observable directly
  products$ = this._http.get<Product[]>(this._product_url);

  productWithCategories$ = combineLatest(
    [this.products$,this._productCategories.categories$]).pipe(
      map(([products, categories]:[Product[], Category[]]) =>
      products.map(
        p=>({
          ...p,
          category:categories.find(c=>
            p.id===c.id).name
        } as Product)

      )
      
      )
    )
}
