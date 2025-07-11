import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarProductComponent } from './similar-product.component';

describe('SimilarProductComponent', () => {
  let component: SimilarProductComponent;
  let fixture: ComponentFixture<SimilarProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimilarProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimilarProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
