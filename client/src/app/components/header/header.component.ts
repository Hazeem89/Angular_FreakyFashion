import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, FormsModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  query: string = '';
  faSearch = faSearch;
  faHeart = faHeart;
  faBasket = faBasketShopping;

  private router = inject(Router);

  handleSearch() {
    if (this.query.trim() !== '') {
      this.router.navigate(['/search'], { queryParams: { q: this.query } });
    }
  }
}
