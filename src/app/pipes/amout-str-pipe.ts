import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amountStr',
  standalone: false
})
export class AmountStrPipe implements PipeTransform {

  transform(value: number): string {
    return value.toFixed(2).replace(".", ",") + ' руб.';
  }

}
