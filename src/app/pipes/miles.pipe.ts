import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miles',
  standalone: true
})
export class MilesPipe implements PipeTransform {

  transform(value: number | undefined): string {
    return value ? `${value} miles` : `miles not available`;
  }

}
