import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'birthYear'
})
export class BirthYearPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
