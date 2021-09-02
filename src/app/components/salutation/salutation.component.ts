import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-salutation',
  templateUrl: './salutation.component.html',
  styleUrls: ['./salutation.component.css']
})
export class SalutationComponent implements OnInit {

  public name : string = '';
  public gender : boolean = false;

  constructor(private _activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.name = this._activatedRoute.snapshot.params['param'];
    this.gender = this._activatedRoute.snapshot.queryParams['gender'];
  }

}
