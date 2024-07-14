import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterOptionsComponent } from './components/footer-options/footer-options.component';
import { BlockFirstComponent } from './components/block-first/block-first.component';
import { BlockSecondComponent } from './components/block-second/block-second.component';
import { BlockThirdComponent } from './components/block-third/block-third.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FooterOptionsComponent,
    BlockFirstComponent,
    BlockSecondComponent,
    BlockThirdComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
