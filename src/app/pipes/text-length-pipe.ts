import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textLength',
  standalone: false
})
export class TextLengthPipe implements PipeTransform {

  transform(text: string,el:any): string {
    let textResult:string='';
    if(text.length >=95 ){
      textResult=text.slice(0,94)+'...';
    } else {textResult =text }
    console.log(el);
    console.log(el.innerText);
    console.log(el.innerText === textResult);

    if(el.innerText === textResult ){
      textResult =text;
    }
    return textResult;
  }

}
