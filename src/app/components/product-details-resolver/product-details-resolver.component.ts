import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/IProduct';

@Component({
  selector: 'app-product-details-resolver',
  templateUrl: './product-details-resolver.component.html',
  styleUrls: ['./product-details-resolver.component.css']
})
export class ProductDetailsResolverComponent implements OnInit {


  public product? : IProduct;

  constructor(private _activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.product = this._activatedRoute.snapshot.data['product']
  }

}
