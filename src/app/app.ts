import {Component} from '@angular/core';
import {AboutAdvantageType} from './types/about-advantage.type';
import {AssortmentType} from './types/assortment.type';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['../assets/styles/jquery-ui.css', '../assets/slick/slick.css', '../assets/slick/slick-theme.css', '../assets/styles/animate.min.css',
    '../assets/styles/hover-min.css', './app.css', '../assets/styles/adaptive.css']
})
export class App {

  public showPresent: boolean = false;
  public phone: string = "+375 (29) 368-98-68";
  public instagram: string = "https://web.telegram.org";
  public popupOn: boolean = false;
  public burger: boolean = false;
  public width620: boolean = (window.innerWidth >= 620) ? true : false;


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

  public assortments: AssortmentType[] = [
    {
      image: "macaroon_red.png",
      name: "Макарун с малиной",
      price: 1.70
    },
    {
      image: "macaroon_yell.png",
      name: "Макарун с манго",
      price: 1.70
    },
    {
      image: "macaroon_beige.png",
      name: "Пирог с ванилью",
      price: 1.70
    },
    {
      image: "macaroon_green.png",
      name: "Пирог с фисташками",
      price: 1.70
    },
    {
      image: "macaroon_vanilla.png",
      name: "Макарун ванильный пломбир",
      price: 1.70
    },
    {
      image: "macaroon_malina.png",
      name: "Макарун малина",
      price: 1.70
    },
    {
      image: "macaroon_currant.png",
      name: "Макарун черная смородина",
      price: 1.70
    },
    {
      image: "macaroon_chocolate.png",
      name: "Макарун шоколад",
      price: 1.70
    },
  ]

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"});
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
}
