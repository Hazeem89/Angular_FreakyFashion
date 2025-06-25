import { Component } from '@angular/core';
import { ProductDetailsComponent } from '../../../components/product-details/product-details.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductDetailsComponent],
  template: `<app-product-details></app-product-details>`
})
export class ProductComponent {}
