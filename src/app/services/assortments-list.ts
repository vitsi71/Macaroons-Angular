import { Injectable } from '@angular/core';
import {AssortmentType} from '../types/assortment.type';

@Injectable()
export class AssortmentsList {

  getAssortments():AssortmentType[]{
    return [
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
  }

}
