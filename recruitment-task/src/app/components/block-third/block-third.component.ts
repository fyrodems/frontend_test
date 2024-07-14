import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-block-third',
  templateUrl: './block-third.component.html',
  styleUrls: ['./block-third.component.scss'],
})
export class BlockThirdComponent implements OnInit {
  sectionTitle =
    'Blok z długą nazwą, która sama się przytnieeeeeeeeeee, bo jest długaaaa';
  contents: string[] = [];

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.contentService.getContentsObservable().subscribe((contents) => {
      this.contents = contents;
    });
  }

  replaceContent(newContent: string) {
    this.contents = [newContent];
  }

  appendContent(newContent: string) {
    if (!this.contents.includes(newContent)) {
      this.contents.push(newContent);
      this.contents.sort();
    } else {
      alert('Ta treść już istnieje.');
    }
  }
}
