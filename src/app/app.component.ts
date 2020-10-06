import { DataService } from './data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo1';

  constructor(dataService: DataService) {
    // console.log('App Component:', dataService.articles);
  }

  search(keyword: string): void {
    console.log(keyword);
  }
}
