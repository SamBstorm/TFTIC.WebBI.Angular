import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Demo1Component } from './components/demo1/demo1.component';
import { Demo2Component } from './components/demo2/demo2.component';
import { HomeComponent } from './components/home/home.component';
import { Demo3Component } from './components/demo3/demo3.component';
import { Demo4Component } from './components/demo4/demo4.component';
import { PowPipePipe } from './components/demo4/pow-pipe.pipe';
import { Demo5Component } from './components/demo5/demo5.component';
import { Demo6Component } from './components/demo6/demo6.component';
import { Demo7Component } from './components/demo7/demo7.component';
import { ShowLivreDirective } from './components/prep/show-livre.directive';
import { ExoDirectiveComponent } from './components/prep/exo-directive/exo-directive.component';
import { HighlightDirective } from './components/prep/exo-directive/highlight.directive';
import { CorrectionComponent } from './components/correction/correction.component';
import { Exo1Component } from './components/correction/exo1/exo1.component';
import { FormatDatePipe } from './components/correction/exo1/forma-date.pipe';
import { Exo2Component } from './components/correction/exo2/exo2.component';
import { DemoDirDirective } from './components/demo5/demo-dir.directive';
import { RecapComponent } from './components/recap/recap.component';
import { Enfant1Component } from './components/demo6/enfant1/enfant1.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SalutationComponent } from './components/salutation/salutation.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    Demo2Component,
    HomeComponent,
    Demo3Component,
    Demo4Component,
    PowPipePipe,
    Demo5Component,
    Demo6Component,
    Demo7Component,
    HighlightDirective,
    ShowLivreDirective,
    ExoDirectiveComponent,
    CorrectionComponent,
    Exo1Component,
    FormatDatePipe,
    Exo2Component,
    DemoDirDirective,
    RecapComponent,
    Enfant1Component,
    NotFoundComponent,
    SalutationComponent,
    ShopComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
