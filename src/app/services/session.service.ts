import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public isConnected = false;
  constructor() { }

  public toggleConnection(){
    this.isConnected = ! this.isConnected
  }
}
