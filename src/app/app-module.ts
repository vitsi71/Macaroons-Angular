import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {FormsModule} from '@angular/forms';
import {AssortmentsList} from './services/assortments-list';
import {AdvantagesComponent} from './components/advantages/advantages';
import { AssortmentComponent } from './components/assortment-component/assortment-component';
import { ButtonBackground } from './directives/button-background';
import { TextLengthPipe } from './pipes/text-length-pipe';
import { PhoneFormatPipe } from './pipes/phone-format-pipe';
import { NavMenu } from './components/nav-menu/nav-menu';

@NgModule({
  declarations: [
    App,
    AdvantagesComponent,
    AssortmentComponent,
     ButtonBackground,
    TextLengthPipe,
    PhoneFormatPipe,
    NavMenu
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
