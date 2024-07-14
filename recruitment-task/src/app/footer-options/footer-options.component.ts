import { Component } from '@angular/core';
import { ContentService } from '../content.service';
import { HeaderStateService } from '../header-state.service';

@Component({
  selector: 'app-footer-options',
  templateUrl: './footer-options.component.html',
  styleUrls: ['./footer-options.component.scss'],
})
export class FooterOptionsComponent {
  constructor(
    private contentService: ContentService,
    private headerStateService: HeaderStateService
  ) {}

  resetSettings() {
    this.contentService.resetContents(); // Reset both default and additional contents
  }

  showPersonalData() {
    this.headerStateService.togglePersonalData(); // Toggle personal data visibility
  }
}
