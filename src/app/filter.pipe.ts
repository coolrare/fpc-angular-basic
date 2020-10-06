import { DataService } from './data.service';
import { Article } from './article';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  constructor(private dataService: DataService) {}

  transform(value: Article[], keyword: string): Article[] {
    return this.dataService.filterArticle(value, keyword);
  }
}
