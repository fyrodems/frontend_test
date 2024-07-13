import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  notRotatingText: string = 'CSS is awesome';

  formatText(text: string): string {
    return text.replace(/\s+/g, '<br>');
  }
}
