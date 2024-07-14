import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeaderStateService {
  private showPersonalData = false;

  constructor() {}

  togglePersonalData() {
    this.showPersonalData = !this.showPersonalData;
  }

  getShowPersonalData() {
    return this.showPersonalData;
  }
}
