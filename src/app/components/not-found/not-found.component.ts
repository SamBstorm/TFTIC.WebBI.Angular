import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit(): void {
    setTimeout(()=>{
      //this._router.navigate([''])
      //this._router.navigateByUrl('https://www.google.be/') -- A vérifier
      this._router.navigateByUrl('')
    }, 5000);
  }

}
