import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AssortmentType} from '../../types/assortment.type';
import {CountOrder} from '../../services/count-order';


@Component({
  selector: 'assortment-component',
  standalone: false,
  templateUrl: './assortment-component.html',
  styleUrl: './assortment-component.css',
})
export class AssortmentComponent {
constructor(public countOrder:CountOrder) {
}

  @Input() assortment:AssortmentType ={
    image:'',
    name:'',
    price:0
  };

  @Output() popupEvent: EventEmitter<AssortmentType>= new EventEmitter<AssortmentType>();
  popup1(product: AssortmentType) {
    this.popupEvent.emit(product);
  }

  @Output() addToOrderEvent: EventEmitter<AssortmentType>= new EventEmitter<AssortmentType>();
  addToOrder(product: AssortmentType) {
    this.addToOrderEvent.emit(product);
    this.countOrder.count++; // добавляем количество в корзину
    this.countOrder.orderAmount += product.price; // добавляем сумму заказа
  }
}
