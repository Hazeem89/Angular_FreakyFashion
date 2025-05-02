import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-footer-nav',
  standalone: true,
  imports: [RouterModule, NgbAccordionModule],
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.css']
})
export class FooterNavComponent implements OnInit {
  ngOnInit() {
    // Initialize accordion panels based on screen width
    const expandedPanels = window.innerWidth < 640 ? [] : ['0', '1', '2'];
    // Bootstrap will handle the rest via data attributes
  }
}
