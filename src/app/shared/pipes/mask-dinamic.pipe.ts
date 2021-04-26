import { Pipe, PipeTransform } from '@angular/core';
import * as StringMask from 'string-mask';

@Pipe({
  name: 'maskDinamic'
})
export class MaskDinamicPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      const v: string = value + '';
      if (v.length > 0) {
        return new StringMask(args).apply(v);
      }
    }
    return '-';
  }

}
