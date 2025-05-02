import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { ProductService, Product } from '../../services/product.service';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-product-card-grid',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule, SpinnerComponent],
  templateUrl: './product-card-grid.component.html',
  styleUrl: './product-card-grid.component.css'
})
export class ProductCardGridComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  displayedProducts: Product[] = [];
  isLoading = true;
  error: string | null = null;
  isMobile = window.innerWidth < 640;
  faHeart = faHeart;
  private resizeListener: () => void;

  constructor(private productService: ProductService) {
    this.resizeListener = () => {
      this.isMobile = window.innerWidth < 640;
      this.updateDisplayedProducts();
    };
  }

  ngOnInit() {
    window.addEventListener('resize', this.resizeListener);
    this.loadProducts();
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.resizeListener);
  }

  private loadProducts() {
    this.isLoading = true;
    this.productService.getAllProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.updateDisplayedProducts();
        this.isLoading = false;
        document.title = 'Freaky Fashion';
      },
      error: (error) => {
        console.error("Error fetching products:", error);
        this.error = error.message;
        this.isLoading = false;
      }
    });
  }

  private updateDisplayedProducts() {
    this.displayedProducts = this.isMobile ? 
      this.products.slice(0, 8) : 
      this.products;
  }
}
