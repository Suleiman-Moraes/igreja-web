import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valueBoolean'
})
export class ValueBooleanPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value ? 'Sim' : 'Não';
  }

}
