import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  keyword = '123';

  constructor() {}

  ngOnInit(): void {}

  search(event: KeyboardEvent): void {
    console.log(this.keyword);
    console.log('search');
  }

  inputChange(event): void{
    this.keyword = (event.target as HTMLInputElement).value;
  }
}
