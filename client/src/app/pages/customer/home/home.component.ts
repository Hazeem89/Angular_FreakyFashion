import { Component } from '@angular/core';
import { HeroComponent } from '../../../components/hero/hero.component';
import { SpotsComponent } from '../../../components/spots/spots.component';
import { ProductCardGridComponent } from '../../../components/product-card-grid/product-card-grid.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, SpotsComponent, ProductCardGridComponent],
  template: `
    <app-hero></app-hero>
    <app-spots></app-spots>
    <app-product-card-grid></app-product-card-grid>
  `
})
export class HomeComponent {}
