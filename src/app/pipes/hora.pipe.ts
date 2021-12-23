import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hora'
})
export class HoraPipe implements PipeTransform {

  transform(value: unknown){
    let valueStr= String(value)
    let hora = valueStr.slice(11,16)

    return hora
  }

}
