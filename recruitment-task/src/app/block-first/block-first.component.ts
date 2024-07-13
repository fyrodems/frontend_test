import { Component } from '@angular/core';
import { SelectedOptionService } from '../selected-option.service';

@Component({
  selector: 'app-block-first',
  templateUrl: './block-first.component.html',
  styleUrls: ['./block-first.component.scss'],
})
export class BlockFirstComponent {
  sectionTitle = 'Blok pierwszy';
  selectedOption: string | undefined;
  options = [
    { id: '1', value: '1st', name: 'Opcja pierwsza' },
    { id: '2', value: '2nd', name: 'Opcja druga' },
    { id: '3', value: 'any', name: 'Opcja losowa' },
  ];

  constructor(private selectedOptionService: SelectedOptionService) {}

  logSelectedOption() {
    this.selectedOptionService.setSelectedOption(this.selectedOption);
    console.log('Selected option:', this.selectedOption);
  }
}
