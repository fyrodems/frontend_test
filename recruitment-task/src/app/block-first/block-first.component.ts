import { Component } from '@angular/core';

@Component({
  selector: 'app-block-first',
  templateUrl: './block-first.component.html',
  styleUrls: ['./block-first.component.scss'],
})
export class BlockFirstComponent {
  sectionTitle = 'Blok pierwszy'
  selectedOption: string | undefined;
  options = [
    {
      id: '1',
      value: '1st',
      name: 'Opcja pierwsza',
    },
    {
      id: '2',
      value: '2nd',
      name: 'Opcja druga',
    },
    {
      id: '3',
      value: 'any',
      name: 'Opcja losowa',
    },
  ];

  logSelectedOption() {
    console.log('Selected option:', this.selectedOption);
  }
}
