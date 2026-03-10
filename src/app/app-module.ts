import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {FormsModule} from '@angular/forms';
import {AssortmentsList} from './services/assortments-list';
import {AmountStrPipe} from './pipes/amout-str-pipe';
import {AdvantagesComponent} from './components/advantages/advantages';

@NgModule({
  declarations: [
    App,
    AmountStrPipe,
    AdvantagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    AssortmentsList
  ],
  bootstrap: [App]
})
export class AppModule { }
