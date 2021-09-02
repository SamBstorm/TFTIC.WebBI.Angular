import { Injectable } from '@angular/core';
import { IProduct } from '../models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class StockProductService {
  

  private _products : IProduct[] = [];

  public get Products() : IProduct[]{ return this._products }

  constructor() {

    this._products = [
      { id : 1, name : 'Gel hydro-alcoholique', description : 'Bidon de de gel 500ml', price : 5.99},
      { id : 2, name : 'Lingette nettoyante', description : 'Boite de 50 lingettes', price : 15.99},
      { id : 3, name : 'Masques chirurgicaux', description : 'Boite de 50 masques bucal', price : 9.99},
      { id : 4, name : 'Chewgum', description : 'Mentos pure-fresh', price : 3.99},
    ];
   }
   
   public Get(id: number): IProduct | undefined {
    let products = this._products.filter(p => p.id == id);
    if (products.length > 0) return products[0];
    return undefined
  }
}
