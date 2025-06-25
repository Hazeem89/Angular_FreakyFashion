import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { TopNavComponent } from '../../components/top-nav/top-nav.component';
import { IconsBarComponent } from '../../components/icons-bar/icons-bar.component';
import { FooterNavComponent } from '../../components/footer-nav/footer-nav.component';

@Component({
  selector: 'app-customer-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    TopNavComponent,
    IconsBarComponent,
    FooterNavComponent
  ],
  templateUrl: './customer-layout.component.html',
  styleUrls: ['./customer-layout.component.css']
})
export class CustomerLayoutComponent {}
