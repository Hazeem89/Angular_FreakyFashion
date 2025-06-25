import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'app-similar-product',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './similar-product.component.html',
  styleUrl: './similar-product.component.css'
})
export class SimilarProductComponent implements OnInit {
  @Input() productName: string = '';
  @Input() productId: number = 0;

  filteredProducts: Product[] = [];
  faHeart = faHeart;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe({
      next: (products) => {
        if (products.length > 0 && this.productName) {
          this.filteredProducts = products
          .filter(product =>
            product.Name?.toLowerCase().includes(this.productName.toLowerCase()) &&
            product.id !== Number(this.productId)
          )
          .slice(0, 3);
        }
      },
      error: (error) => {
        console.error("Error fetching similar products:", error);
      }
    });
  }
}
