import { ProductCategoriesService } from './../product-categories.service';
import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './producs';
import { catchError } from 'rxjs/operators';
import { Category } from './category';

@Component({
  selector: 'app-mapping-data',
  templateUrl: './mapping-data.component.html',
  styleUrls: ['./mapping-data.component.scss']
})
export class MappingDataComponent implements OnInit {

  constructor(private _productService:ProductsService, private _categoryService:ProductCategoriesService) { }

  ngOnInit() {

  }
  products$:Observable<Product[]> = this._productService.products$;
  categories$:Observable<Category[]> = this._categoryService.categories$;
  productWithCategories$:Observable<Product[]> =this._productService.productWithCategories$;
}
