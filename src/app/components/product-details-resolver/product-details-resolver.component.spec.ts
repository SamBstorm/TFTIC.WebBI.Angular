import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsResolverComponent } from './product-details-resolver.component';

describe('ProductDetailsResolverComponent', () => {
  let component: ProductDetailsResolverComponent;
  let fixture: ComponentFixture<ProductDetailsResolverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsResolverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
