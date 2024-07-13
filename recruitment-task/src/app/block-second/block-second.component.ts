import { Component, EventEmitter, Output } from '@angular/core';
import { ContentService } from '../content.service';
import { SelectedOptionService } from '../selected-option.service';

@Component({
  selector: 'app-block-second',
  templateUrl: './block-second.component.html',
  styleUrls: ['./block-second.component.scss'],
})
export class BlockSecondComponent {
  sectionTitle = 'Blok drugi';

  @Output() replaceContent = new EventEmitter<string>();
  @Output() appendContent = new EventEmitter<string>();

  selectedOption: string | undefined;

  constructor(
    private contentService: ContentService,
    private selectedOptionService: SelectedOptionService
  ) {
    this.selectedOptionService.selectedOption$.subscribe((option) => {
      this.selectedOption = option;
    });
  }

  replace() {
    if (this.selectedOption) {
      const newContent = this.contentService.getContentByOption(
        this.selectedOption
      );
      this.replaceContent.emit(newContent);
    }
  }

  append() {
    if (this.selectedOption) {
      const newContent = this.contentService.getContentByOption(
        this.selectedOption
      );
      this.appendContent.emit(newContent);
    }
  }
}
