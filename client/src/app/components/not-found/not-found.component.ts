import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="not-found">
      <h1>404 - Sidan kunde inte hittas</h1>
      <p>Den sidan du söker finns inte.</p>
      <a routerLink="/">Tillbaka till startsidan</a>
    </div>
  `,
  styles: [`
    .not-found {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      text-align: center;
      font-family: "Balsamiq Sans", sans-serif;
    }
    
    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    
    a {
      margin-top: 1rem;
      padding: 0.5rem 1rem;
      background-color: #15b8f8;
      color: white;
      border-radius: 4px;
      text-decoration: none;
    }
    
    a:hover {
      background-color: #0e9ed8;
    }
  `]
})
export class NotFoundComponent {}