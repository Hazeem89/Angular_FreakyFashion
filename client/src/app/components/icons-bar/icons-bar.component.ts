import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faShield } from '@fortawesome/free-solid-svg-icons';
import { faJetFighter } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-icons-bar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './icons-bar.component.html',
  styleUrls: ['./icons-bar.component.css']
})
export class IconsBarComponent {
  faGlobe = faGlobe;
  faShield = faShield;
  faJetFighter = faJetFighter;
  faSmile = faSmile;
}
