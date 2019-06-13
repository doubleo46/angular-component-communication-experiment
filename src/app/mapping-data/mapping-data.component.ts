import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapping-data',
  templateUrl: './mapping-data.component.html',
  styleUrls: ['./mapping-data.component.scss']
})
export class MappingDataComponent implements OnInit {

  public products = [];
  constructor(private _productService:ProductsService) { }

  ngOnInit() {
    this._productService.getProducts().subscribe(data=>this.products=data);
    console.log(this.products);
  }

}
