import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './producs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-mapping-data',
  templateUrl: './mapping-data.component.html',
  styleUrls: ['./mapping-data.component.scss']
})
export class MappingDataComponent implements OnInit {

  constructor(private _productService:ProductsService) { }

  ngOnInit() {

  }
  products$:Observable<Product[]> = this._productService.products$
}
