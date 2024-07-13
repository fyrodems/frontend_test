import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FooterOptionsComponent } from './footer-options/footer-options.component';
import { BlockFirstComponent } from './block-first/block-first.component';
import { BlockSecondComponent } from './block-second/block-second.component';
import { BlockThirdComponent } from './block-third/block-third.component';

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
