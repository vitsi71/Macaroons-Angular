import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textLength',
  standalone: false
})
export class TextLengthPipe implements PipeTransform {

  transform(text: string): string {
    let textResult:string='';
    if(text.length >=95){
      textResult=text.slice(0,94)+'...';
    } else {textResult =text }
    return textResult;
  }

}
