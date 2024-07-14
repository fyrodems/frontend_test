import { Component } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { HeaderStateService } from '../../services/header-state.service';

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
    this.contentService.resetContents();
  }

  showPersonalData() {
    this.headerStateService.togglePersonalData();
    console.log();
  }

  generatePersonalDataLabel() {
    return this.headerStateService.getShowPersonalData()
      ? 'ukryj dane osobowe'
      : 'pokaż dane osobowe';
  }
}
