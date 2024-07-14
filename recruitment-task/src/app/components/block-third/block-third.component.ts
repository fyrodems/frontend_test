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
  allAdditionalContents: string[] = [];
  hasSelected1st: boolean = false;
  hasSelected2nd: boolean = false;

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.contentService.getContentsObservable().subscribe((contents) => {
      this.contents = contents;
    });

    this.allAdditionalContents = this.contentService.getAdditionalContents();
  }

  replaceContent(newContent: string) {
    this.contents = [newContent];
    this.hasSelected1st =
      newContent === this.contentService.getContentByOption('1st');
    this.hasSelected2nd =
      newContent === this.contentService.getContentByOption('2nd');
  }

  appendContent(newContent: string) {
    if (!this.contents.includes(newContent)) {
      this.contents.push(newContent);
      this.contents.sort();
    } else {
      if (newContent === this.contentService.getContentByOption('1st')) {
        if (this.hasSelected1st) {
          alert('Treść pierwsza została już doklejona.');
          return;
        }
        this.hasSelected1st = true;
      } else if (newContent === this.contentService.getContentByOption('2nd')) {
        if (this.hasSelected2nd) {
          alert('Treść druga została już doklejona.');
          return;
        }
        this.hasSelected2nd = true;
      } else {
        let newRandomContent = this.contentService.getContentByOption('any');
        while (this.contents.includes(newRandomContent)) {
          newRandomContent = this.contentService.getContentByOption('any');
        }
        this.contents.push(newRandomContent);
        this.contents.sort();
      }
    }

    if (this.contents.length >= this.allAdditionalContents.length) {
      alert(
        'Nie można dodać więcej treści, wszystkie opcje zostały wykorzystane.'
      );
    }
  }
}
