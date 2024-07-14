import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private defaultContents: string[] = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Maecenas tristique efficitur libero, sed commodo libero semper vitae.',
    'Vestibulum vestibulum eget est et cursus.',
    'Suspendisse ornare mollis consectetur.',
    'Fusce dapibus faucibus nisl, sit amet vestibulum nisi pharetra ac.',
    'Donec tortor ante, facilisis sed efficitur iaculis, tincidunt ut mauris.',
  ];
  private additionalContents: string[] = [
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
      this.saveContents(); // Save default contents if nothing in localStorage
    }
    this.contentsSubject.next(this.defaultContents); // Emit default contents initially
  }

  private saveContents() {
    const contentsToSave = {
      defaultContents: this.defaultContents,
      additionalContents: this.additionalContents,
    };
    localStorage.setItem(this.storageKey, JSON.stringify(contentsToSave));
    this.contentsSubject.next(this.defaultContents); // Emit default contents after saving
  }

  getDefaultContents(): string[] {
    return this.defaultContents;
  }

  getAdditionalContents(): string[] {
    return this.additionalContents;
  }

  resetContents() {
    this.defaultContents = [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Maecenas tristique efficitur libero, sed commodo libero semper vitae.',
      'Vestibulum vestibulum eget est et cursus.',
      'Suspendisse ornare mollis consectetur.',
      'Fusce dapibus faucibus nisl, sit amet vestibulum nisi pharetra ac.',
      'Donec tortor ante, facilisis sed efficitur iaculis, tincidunt ut mauris.',
    ];
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
