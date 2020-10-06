import { Article } from './article';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Article[], keyword: string): unknown {
    return value.filter(article => article.title.indexOf(keyword) !== -1);
  }

}
