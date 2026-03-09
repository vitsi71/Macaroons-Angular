import {Component, OnInit} from '@angular/core';
import {AboutAdvantageType} from './types/about-advantage.type';
import {AssortmentType} from './types/assortment.type';
import {AssortmentsList} from './services/assortments-list';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['../assets/styles/jquery-ui.css', '../assets/slick/slick.css', '../assets/slick/slick-theme.css', '../assets/styles/animate.min.css',
    '../assets/styles/hover-min.css', './app.css', '../assets/styles/adaptive.css']
})
export class App implements OnInit{
constructor(private assortmentsList:AssortmentsList) {
}
  public showPresent: boolean = false;
  public phone: string = "+375 (29) 368-98-68";
  public instagram: string = "https://web.telegram.org";
  public popupOn: boolean = false;
  public burger: boolean = false;

  public burgerOn():void{
    this.burger=!this.burger;
  }

  ngOnInit(){
    this.assortments=this.assortmentsList.getAssortments();
  }

  public advantages: AboutAdvantageType[] = [
    {
      num: 1,
      name: "Лучшие продукты",
      info: "Мы честно готовим макаруны только из натуральных и качественных продуктов.Мы " +
        "не используем консерванты, ароматизаторы и красители."
    },
    {
      num: 2,
      name: "Много вкусов",
      info: "Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас" +
        " более 70 вкусов пироженок."
    },
    {
      num: 3,
      name: "Бисквитное тесто",
      info: "Все пирожные готовятся на бисквитном тесте с качественным сливочным " +
        "маслом 82,5%. В составе нет маргарина и дрожжей!"
    },
    {
      num: 4,
      name: "Честный продукт",
      info: "Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии," +
        " которую мы получили 22.06.2016 г."
    },
  ]

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
    inputProduct.style.height = inputProduct.scrollHeight.toString() + 'px';
  }

  public assortmentImage: string = '';

  public popup(product: AssortmentType) {
    this.popupOn = true;
    this.assortmentImage = product.image;
  }

  protected readonly AssortmentsList = AssortmentsList;
}
