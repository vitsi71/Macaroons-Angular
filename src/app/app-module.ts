import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {FormsModule} from '@angular/forms';
import {AssortmentsList} from './services/assortments-list';
import {CurrencyPipe} from './pipes/currency-pipe';
import {AdvantagesComponent} from './components/advantages/advantages';
import { AssortmentComponent } from './components/assortment-component/assortment-component';
import { ButtonBackground } from './directives/button-backgraund';
import { TextLengthPipe } from './pipes/text-length-pipe';

@NgModule({
  declarations: [
    App,
    CurrencyPipe,
    AdvantagesComponent,
    AssortmentComponent,
     ButtonBackground,
    TextLengthPipe
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
