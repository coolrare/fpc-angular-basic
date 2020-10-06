import { DataService } from './../data.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {

  @Output() searchButtonClick
    = new EventEmitter();

  keyword = '123';

  a = { title : 'test'};

  display = true;

  articles = this.dataService.articles;

  constructor(private dataService: DataService) {
    console.log('Container Component:', dataService.articles);
  }

  ngOnInit(): void {

    // setTimeout(() => {
    //   this.a = { title: 'Test 2'};
    // }, 3000);
    this.a.title = 'Test 2';

  }

  search(event: KeyboardEvent): void {
    this
      .searchButtonClick
      .emit(this.keyword);
    console.log(this.keyword);
    console.log('search');
    this.display = !this.display;
  }

  inputChange(event): void {
    this.keyword = (event.target as HTMLInputElement).value;
  }
}
