import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountOrder {
  public count:number=0;
  public orderAmount:number=0;
}
