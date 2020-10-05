import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'The Will Will Web Hello World';

  subtitle = '記載著 <u>Will</u> 在網路世界的學習心得與技術分享';

  titleWrapper = 'title-wrapper';

  highlight = true;

  constructor() { }

  ngOnInit(): void {
  }

  buttonClick(event: MouseEvent): void {
    this.highlight = !this.highlight;
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
