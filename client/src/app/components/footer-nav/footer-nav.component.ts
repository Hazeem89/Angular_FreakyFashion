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
  expandedPanels: string[] = [];

  ngOnInit() {
    // Initialize accordion panels based on screen width
    this.expandedPanels = window.innerWidth < 640 ? [] : ['shopping', 'pages', 'service'];
  }

  togglePanel(panelId: string) {
    const index = this.expandedPanels.indexOf(panelId);
    if (index > -1) {
      this.expandedPanels.splice(index, 1);
    } else {
      this.expandedPanels.push(panelId);
    }
  }
}
