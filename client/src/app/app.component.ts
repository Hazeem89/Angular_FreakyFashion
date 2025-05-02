import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Freaky Fashion';
  products: any[] = [];
  constructor(private http: HttpClient) { 

    this.http.get<any[]>('/products/').subscribe(products => {
      this.products = products;
      console.log(this.products);
      });
  }
}
