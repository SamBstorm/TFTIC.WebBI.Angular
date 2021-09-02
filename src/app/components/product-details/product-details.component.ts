import { ActivatedRoute, Router } from '@angular/router';
import { StockProductService } from './../../services/stock-product.service';
import { IProduct } from './../../models/IProduct';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public product? : IProduct;

  constructor(
    private _stockProduct:StockProductService,
    private _activatedRoute : ActivatedRoute,
    private _router : Router
    ) { }

  ngOnInit(): void {
    let id : number = this._activatedRoute.snapshot.params['id'];
    this.product = this._stockProduct.Get(id);
    if(this.product == undefined) this._router.navigate(['shop'])
  }

}
