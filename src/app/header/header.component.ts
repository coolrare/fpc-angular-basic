import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'The Will Will Web Hello World';

  titleWrapper = 'title-wrapper';

  constructor() { }

  ngOnInit(): void {
  }

  buttonClick(event: MouseEvent): void {
    if(event.altKey) {
      console.log('test');
    }
    // console.log(event);
    // let a: any;
    // a = '1';
    // a.link('a');
    // console.log('test');
  }

}
