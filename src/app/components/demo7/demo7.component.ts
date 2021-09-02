import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html'
})
export class Demo7Component implements OnInit {

  public urlParam : string = ''

  constructor(private _router : Router) { }

  ngOnInit(): void {
  }

  redirectTo() : void{
    if(this.urlParam.length > 0) this._router.navigate(['salutation/'+this.urlParam]);
  }

}
