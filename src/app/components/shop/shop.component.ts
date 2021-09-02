import { IProduct } from './../../models/IProduct';
import { StockProductService } from './../../services/stock-product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  public products : IProduct[] = [];

  constructor(private _stockProduct : StockProductService) { }

  ngOnInit(): void {
    this.products = this._stockProduct.Products;
  }

}
