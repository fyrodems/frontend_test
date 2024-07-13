import { Component } from '@angular/core';

@Component({
  selector: 'app-block-third',
  templateUrl: './block-third.component.html',
  styleUrls: ['./block-third.component.scss'],
})
export class BlockThirdComponent {
  sectionTitle =
    'Blok z długą nazwą która sama się przytnieeeeeeeeeee, bo jest długaaaa';
  contents: string[] = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Maecenas tristique efficitur libero, sed commodo libero semper vitae.',
    'Vestibulum vestibulum eget est et cursus.',
    'Suspendisse ornare mollis consectetur.',
    'Fusce dapibus faucibus nisl, sit amet vestibulum nisi pharetra ac.',
    'Donec tortor ante, facilisis sed efficitur iaculis, tincidunt ut mauris.',
  ];

  replaceContent(newContent: string) {
    this.contents = [newContent];
  }

  appendContent(newContent: string) {
    console.log(newContent);

    if (!this.contents.includes(newContent)) {
      this.contents.push(newContent);
      this.contents.sort();
      console.log(this.contents);
      console.log(this.contents.sort());
    } else {
      this.contents.sort();
      alert('Ta treść już istnieje.');
    }
  }
}
