import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import data from '../../assets/data.json';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private defaultContents: string[] = data.defaultContents;
  private additionalContents: string[] = data.additionalContents;
  private storageKey = 'contents';

  private contentsSubject = new BehaviorSubject<string[]>(this.defaultContents);

  constructor() {
    this.loadContents();
  }

  private loadContents() {
    const storedContents = localStorage.getItem(this.storageKey);
    if (storedContents) {
      const parsedContents = JSON.parse(storedContents);
      this.defaultContents =
        parsedContents.defaultContents || this.defaultContents;
      this.additionalContents =
        parsedContents.additionalContents || this.additionalContents;
    } else {
      this.saveContents();
    }
    this.contentsSubject.next(this.defaultContents);
  }

  private saveContents() {
    const contentsToSave = {
      defaultContents: this.defaultContents,
      additionalContents: this.additionalContents,
    };
    localStorage.setItem(this.storageKey, JSON.stringify(contentsToSave));
    this.contentsSubject.next(this.defaultContents);
  }

  getDefaultContents(): string[] {
    return this.defaultContents;
  }

  getAdditionalContents(): string[] {
    return this.additionalContents;
  }

  resetContents() {
    this.defaultContents = data.defaultContents;
    this.saveContents();
  }

  addAdditionalContent(content: string) {
    this.additionalContents.push(content);
    this.saveContents();
  }

  editAdditionalContent(index: number, newContent: string) {
    this.additionalContents[index] = newContent;
    this.saveContents();
  }

  deleteAdditionalContent(index: number) {
    this.additionalContents.splice(index, 1);
    this.saveContents();
  }

  getContentsObservable() {
    return this.contentsSubject.asObservable();
  }

  getContentByOption(option: string): string {
    switch (option) {
      case '1st':
        return this.additionalContents[0];
      case '2nd':
        return this.additionalContents[1];
      case 'any':
        const randomIndex = Math.floor(
          Math.random() * this.additionalContents.length
        );
        return this.additionalContents[randomIndex];
      default:
        return '';
    }
  }
}
