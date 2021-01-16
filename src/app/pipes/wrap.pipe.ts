import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wrap'
})
export class WrapPipe implements PipeTransform {

  transform(text: string): string {
    if (text.length > 10) {
      let shortedText = text.substr(0, 10) + '...';
      return shortedText;
    }
      return text;
  }

}
