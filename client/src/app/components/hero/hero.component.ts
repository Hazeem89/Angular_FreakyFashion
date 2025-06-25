import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
  topProduct: Product | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe({
      next: (products) => {
        if (products.length > 0) {
          // Find product with highest totalSales
          this.topProduct = products.reduce((highest, current) => {
            return (current.totalSales > highest.totalSales) ? current : highest;
          }, products[0]);
        }
      },
      error: (error) => {
        console.error("Error fetching products:", error);
      }
    });
  }
}
