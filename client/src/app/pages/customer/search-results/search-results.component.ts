import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { ProductService, Product } from '../../../services/product.service';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent implements OnInit {
  filteredProducts: Product[] = [];
  query: string = '';
  faHeart = faHeart;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.query = params['q'] || '';
      if (this.query) {
        this.productService.getAllProducts().subscribe({
          next: (products) => {
            this.filteredProducts = products.filter(product =>
              product.Name.toLowerCase().includes(this.query.toLowerCase()) ||
              product.Brand.toLowerCase().includes(this.query.toLowerCase()) ||
              product.Description.toLowerCase().includes(this.query.toLowerCase())
            );
          },
          error: (error) => {
            console.error("Error fetching products:", error);
          }
        });
      }
    });
  }
}
