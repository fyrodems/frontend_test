import { Component } from '@angular/core';
import { HeaderData } from './header.interface';
import { HeaderStateService } from '../header-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  data: HeaderData = {
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC70lEQVR4nO2aO2gUQRzGV6MYiJBECGgaQZFrfAWxUEyaFKZQCD5ABdMI2gTUIhYKwUehoCKSyldAgyipAipqFAULH2gRUUEFRaIhBsWkOCHR05/MOYWGyX92Zm/XEfLBNHf7/7757e3ePHajaFKBC1gPjBGuxoB1cUDaCV/tcUB2EL62xwFpJnw1xwFZSfhaEQdkPuFrXhyQmYSvCiuIhskTrvKxIDTIW8LVGxeQB4KR+q465XZfyncB6RGMXkcpC3gl5Pe4GJ0WjEZSpYiK+SNC/ikXo0PIKk8RotySfdDFrNViNtdQU1Wi+2OhJbvVBWSjxWy5oWaIbLTBBaTBYrbGUPMsI5AGF5CcxWyboeZ2RiA5FxB1rUraa6i5mBFIlQvIFGBUMDtpqDmRAcSo6ltsEN2x94LhZSczt9xLQm6/j+ETwfBuKhRRMfeOkPvYx/CaYPgiFYqomPtcyL3qY9gpGH5OhSIq5n4Scjt9DA8Lhj+BBWqllrCVjcucBvwQco/4gOwmff01ZwPmWI7f5QOyJWWIYUPmUkvNZh+QxpRBXhoyV1tqGn1AbLPQr8CXce2bA8g9Q+ZWS80iH5Aai+keQ023A0i3ob7NUlPjAzIV+C6YHjPUdDiAdBjqjwrHF1SfnEG08aBg3GU4fglwALiuxhpDzTBwQ63y1LGG+vNC3kcvCG3cJxj3xty13KSv/ZxtwsdvyIn0NAlIr2Dc523sd+JuJjHuEowHS0rhcSnHlrqhLdOUR8A+0/XukLFYLdSAh9pzIh33zYjzd/in3qk9J2AtMEPwLANWqXmTGhQd/NuSgLTgJzVYXlFPloDZwCy9M3PBsvkmqSUJSBPJVdAtqZqSgNQRjuqSgNQSjmqTgEwP5KFPXvXFG0TD1APngIF/ADCgs+sTQRig1PJ0J3ArpbcjCnr3Zj+wzHkPyxOqQo8ZauzoT9D5IT39V3/11al3vIS/VvZn3VdApX455yzwQbcz+rNKb+NJRf+PfgG9zR4E+J8ytAAAAABJRU5ErkJggg==',
    title: 'Zadanie rekrutacyjne',
  };

  constructor(private headerStateService: HeaderStateService) {}

  get showPersonalData(): boolean {
    return this.headerStateService.getShowPersonalData();
  }
}
