import { Component } from '@angular/core';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-footer-options',
  templateUrl: './footer-options.component.html',
  styleUrls: ['./footer-options.component.scss'],
})
export class FooterOptionsComponent {
  constructor(private contentService: ContentService) {}

  resetSettings() {
    this.contentService.resetContents(); // Reset both default and additional contents
  }

  showPersonalData() {
    // Implement show personal data functionality here
  }
}
