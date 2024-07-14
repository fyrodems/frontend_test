import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SelectedOptionService {
  private selectedOptionSubject = new BehaviorSubject<string | undefined>(
    undefined
  );
  selectedOption$ = this.selectedOptionSubject.asObservable();

  setSelectedOption(option: string | undefined) {
    this.selectedOptionSubject.next(option);
  }
}
