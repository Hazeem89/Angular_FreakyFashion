import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { ProductService, Product } from '../../services/product.service';
import { SimilarProductComponent } from '../similar-product/similar-product.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, SimilarProductComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product: Product | null = null;
  faHeart = faHeart;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = parseInt(params['id'], 10);
      this.productService.getProductById(id).subscribe({
        next: (product) => {
          this.product = product;
          document.title = product.Name;
        },
        error: (error) => {
          console.error("Error fetching product:", error);
        }
      });
    });
  }
}
