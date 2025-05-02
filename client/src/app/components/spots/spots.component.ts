import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'app-spots',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './spots.component.html',
  styleUrl: './spots.component.css'
})
export class SpotsComponent implements OnInit {
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe({
      next: (products) => {
        if (products.length > 0) {
          // Get top 4 products by totalSales
          const topProducts = [...products]
            .sort((a, b) => b.totalSales - a.totalSales)
            .slice(0, 4);
          
          // Take only products ranked 2-4 (index 1-3)
          this.filteredProducts = topProducts.slice(1, 4);
        }
      },
      error: (error) => {
        console.error("Error fetching products:", error);
      }
    });
  }
}
