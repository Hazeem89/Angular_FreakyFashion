import { Routes } from '@angular/router';

// Layout components
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CustomerLayoutComponent } from './layouts/customer-layout/customer-layout.component';

// Admin pages
import { AdminProductsComponent } from './pages/admin/admin-products/admin-products.component';
import { NewProductComponent } from './pages/admin/new-product/new-product.component';

// Customer pages
import { HomeComponent } from './pages/customer/home/home.component';
import { ProductComponent } from './pages/customer/product/product.component';
import { SearchResultsComponent } from './pages/customer/search-results/search-results.component';

export const routes: Routes = [
  {
    path: '',
    component: CustomerLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'products/:id/:name', component: ProductComponent },
      { path: 'search', component: SearchResultsComponent }
    ]
  },
  {
    path: 'admin/products',
    component: AdminLayoutComponent,
    children: [
      { path: '', component: AdminProductsComponent },
      { path: 'new', component: NewProductComponent }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Wildcard route
];
