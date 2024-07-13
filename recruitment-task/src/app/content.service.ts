import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private storageKey = 'contents';
  private contents: string[] = [];

  constructor() {
    this.loadContents();
  }

  private loadContents() {
    const storedContents = localStorage.getItem(this.storageKey);
    if (storedContents) {
      this.contents = JSON.parse(storedContents);
    } else {
      // Initial contents if nothing in localStorage
      this.contents = [
        'Pierwsza treść',
        'Druga treść',
        'Trzecia treść',
        'Czwarta treść',
        'Piąta treść',
        'Szósta treść',
        'Siódma treść',
        'Ósma treść',
        'Dziewiąta treść',
        'Dziesiąta treść',
      ];
      this.saveContents();
    }
  }

  private saveContents() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.contents));
  }

  getContents(): string[] {
    return this.contents;
  }

  addContent(content: string) {
    this.contents.push(content);
    this.saveContents();
  }

  editContent(index: number, newContent: string) {
    this.contents[index] = newContent;
    this.saveContents();
  }

  deleteContent(index: number) {
    this.contents.splice(index, 1);
    this.saveContents();
  }

  clearContents() {
    this.contents = [];
    this.saveContents();
  }

  getContentByOption(option: string): string {
    switch (option) {
      case '1st':
        return this.contents[0];
      case '2nd':
        return this.contents[1];
      case 'any':
        const randomIndex = Math.floor(Math.random() * this.contents.length);
        return this.contents[randomIndex];
      default:
        return '';
    }
  }
}
