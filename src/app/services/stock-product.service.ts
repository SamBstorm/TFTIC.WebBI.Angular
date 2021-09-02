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

  public Post(entry : IProduct) : number{
    let id : number = Math.max(...this.Products.map(p => p.id))+1;
    entry.id = id;
    this._products.push(entry);
    return id;
  }

  public Delete(id : number) : void{
    this._products = this._products.filter(p => p.id != id);
  }

  public Update(id: number, entry : IProduct) : void{
    let found : boolean = false;
    for (let index = 0; index < this._products.length && !found; index ++) {
      if(this._products[index].id == id){
        found = true;
        this._products[index].name = entry.name;
        this._products[index].description = entry.description;
        this._products[index].price = entry.price;
      }
    }
  }
}
