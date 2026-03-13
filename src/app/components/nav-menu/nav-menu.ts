import {Component, SkipSelf} from '@angular/core';
import {App} from '../../app';

@Component({
  selector: 'nav-menu',
  standalone: false,
  template:`
    <div class="nav__menu">
      <a (click)="app.scrollTo(app.assortment.nativeElement)" class="nav__link">Пироженки</a>
      <a (click)="app.scrollTo(app.advantagesComponent.about.nativeElement)" class="nav__link">О нас</a>
      <a (click)="app.scrollTo(app.order.nativeElement)" class="nav__link">Оформить заказ</a>
    </div>`,
  styleUrl: './nav-menu.css',
})
export class NavMenu {
  constructor(@SkipSelf() public app: App) {
  }
}
