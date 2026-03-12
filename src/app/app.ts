import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AssortmentType} from './types/assortment.type';
import {AssortmentsList} from './services/assortments-list';
import {CountOrder} from './services/count-order';
import {AdvantagesComponent} from './components/advantages/advantages';



@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['../assets/styles/jquery-ui.css', '../assets/slick/slick.css', '../assets/slick/slick-theme.css', '../assets/styles/animate.min.css',
    '../assets/styles/hover-min.css', './app.css', '../assets/styles/adaptive.css']
})
export class App implements OnInit{


constructor(private assortmentsList:AssortmentsList, public countOrder:CountOrder) {

}
  public showPresent: boolean = true;
  public phone: string = "375293689868";
  public instagram: string = "https://web.telegram.org";
  public burger: boolean = false;


  @ViewChild (AdvantagesComponent)
  public advantagesComponent!: AdvantagesComponent;

  @ViewChild ('assortment')
  public assortment!: ElementRef;
  @ViewChild ('order')
  public order!: ElementRef;


  public burgerOn():void{
    this.burger=!this.burger;
  }

  ngOnInit(){
    this.assortments=this.assortmentsList.getAssortments();
  }

  public assortments: AssortmentType[] = [];


  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"});
    this.burger=false;
  }

  public valueOrder: string = '';
  public addToOrder(product: AssortmentType, target: HTMLElement) {

    this.scrollTo(target);
    // разбиваем заказ намассив элементов
    let orderArr = this.valueOrder.split(',');

    for (let i = 0; i < orderArr.length; i++) {
      //ищем в массиве уже заказанные позиции
      if (orderArr[i].includes(product.name.toUpperCase())) {
        //если нашли, получаем последний элемент с колличеством
        let count: string | undefined = orderArr[i].split(' ').pop();
        if (count) {
          //увеличиваем колличество на 1 и заменяем товар в первоначальном массиве
          orderArr[i] = ' ' + product.name.toUpperCase() + ' ' + (parseInt(count) + 1) + 'шт';
        }
        //заполняем исправленный заказ
        this.valueOrder = '';
        for (let i = 0; i < orderArr.length; i++) {
          let separator = (this.valueOrder === '') ? '' : ',';
          this.valueOrder += separator + orderArr[i];
        }
        break;
      } else {
        //если товара в заказе нет - добавляем в заказ
        if (i === orderArr.length - 1) {
          let separator = (this.valueOrder === '') ? '' : ', ';
          this.valueOrder += separator + product.name.toUpperCase() + ' 1шт';
        }
      }
    }

     //увеличиваем высоту HTMLTextAreaElement

    let inputProduct: HTMLTextAreaElement = document.getElementById("input-product") as HTMLTextAreaElement;

    inputProduct.style.height = inputProduct.scrollHeight.toString()+'px';

    alert(product.name.toUpperCase() + ' добавлен в корзину!')
  }

  public popupOn: boolean = false;
  public assortmentImage: string = '';


  public popup(product: AssortmentType) {
    this.popupOn = true;
    this.assortmentImage = product.image;
  }

}
