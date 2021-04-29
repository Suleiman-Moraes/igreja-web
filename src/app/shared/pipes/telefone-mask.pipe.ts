import { Pipe, PipeTransform } from '@angular/core';
import * as StringMask from 'string-mask';

@Pipe({
  name: 'telefoneMask'
})
export class TelefoneMaskPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      const v: string = value + '';
      if (v.length > 0) {
        if (v.length == 11) {
          return new StringMask('(00) 0 0000-0000').apply(v);
        }
        else{
          return new StringMask('(00) 0000-0000').apply(v);
        }
      }
    }
    return '-';
  }
}
