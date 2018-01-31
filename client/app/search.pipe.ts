import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(values: any, searchString: string): any {
    return values.filter(e => {
      return e.name.includes(searchString)
      || e.description.includes(searchString)
      || e.size.includes(searchString);
    });
  }

}
