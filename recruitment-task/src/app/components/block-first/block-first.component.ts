import { Component } from '@angular/core';
import { SelectedOptionService } from '../../services/selected-option.service';

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

  setSelectedOption() {
    this.selectedOptionService.setSelectedOption(this.selectedOption);
  }
}
