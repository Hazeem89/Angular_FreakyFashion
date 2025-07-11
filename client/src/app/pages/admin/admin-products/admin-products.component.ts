import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService, Product } from '../../../services/product.service';

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-products.component.html',
  styleUrl: './admin-products.component.css'
})
export class AdminProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
    document.title = 'Administration';
  }

  private loadProducts() {
    this.productService.getAllProducts().subscribe({
      next: (products) => {
        this.products = products;
      },
      error: (error) => {
        console.error("Error fetching products:", error);
      }
    });
  }

  deleteProduct(id: number) {
    if (confirm('Är du säker på att du vill radera denna produkt?')) {
      this.productService.deleteProduct(id).subscribe({
        next: () => {
          // Remove from local list
          this.products = this.products.filter(p => p.id !== id);
        },
        error: (error) => {
          console.error("Fel vid radering av produkt:", error);
        }
      });
    }
  }
}
