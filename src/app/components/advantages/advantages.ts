import {Component, ElementRef, ViewChild} from '@angular/core';
import {AboutAdvantageType} from '../../types/about-advantage.type';

@Component({
  selector: 'advantagesComponent',
  standalone: false,
  templateUrl: './advantages.html',
  styleUrl: './advantages.css',
})
export class AdvantagesComponent {

@ViewChild ("about")
  public about!: ElementRef;

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
}
