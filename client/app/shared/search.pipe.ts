import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any, searchString: string): any {
    if (!items) { return []; }
    if (!searchString) { return items; }

    const searchFor = searchString.toLowerCase();

    return items.filter(item => {
      if (typeof item === 'object' && !Array.isArray(item)) {
        for (const property in item) {
          if (item[property] == null || item[property] === undefined) {
            continue;
          }
          if (item[property].toString().toLowerCase().includes(searchFor)) {
            return true;
          }
        }
      }
    });

  }
}
