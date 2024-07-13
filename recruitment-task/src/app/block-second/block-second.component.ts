import { Component } from '@angular/core';

@Component({
  selector: 'app-block-second',
  templateUrl: './block-second.component.html',
  styleUrl: './block-second.component.scss',
})
export class BlockSecondComponent {
  sectionTitle = 'Blok drugi';

  replace() {
    console.log('Replace button clicked');
    // Implement the replace functionality here
  }

  append() {
    console.log('Append button clicked');
    // Implement the append functionality here
  }
}
