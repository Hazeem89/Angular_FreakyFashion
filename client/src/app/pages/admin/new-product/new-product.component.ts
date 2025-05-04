import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent {
  product = {
    Name: '',
    Description: '',
    Image: '',
    Brand: '',
    SKU: '',
    Price: 0,
    totalSales: 0
  };

  errorMessage = '';
  successMessage = '';

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.validateForm()) {
      this.productService.createProduct(this.product).subscribe({
        next: (response) => {
          this.successMessage = 'Produkt skapad!✅';
          setTimeout(() => {
            this.router.navigate(['/admin/products']);
          }, 2000);
        },
        error: (error) => {
          this.errorMessage = '⛔Ett fel uppstod när produkten skulle skapas';
          console.error('Error creating product:', error);
        }
      });
    }
  }

  private validateForm(): boolean {
    if (!this.product.Name) {
      this.errorMessage = '⛔Produktnamn krävs';
      return false;
    }
    if (!this.product.Description) {
      this.errorMessage = '⛔Produktbeskrivning krävs';
      return false;
    }
    if (!this.product.Image) {
      this.errorMessage = '⛔Produktbild krävs';
      return false;
    }
    if (!this.product.Brand) {
      this.errorMessage = '⛔Produktmärke krävs';
      return false;
    }
    if (!this.product.SKU) {
      this.errorMessage = '⛔Produkt-SKU krävs';
      return false;
    }
    if (!this.product.Price || this.product.Price <= 0) {
      this.errorMessage = '⛔Giltigt pris krävs';
      return false;
    }
    return true;
  }
}
