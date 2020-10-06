import { Article } from './../article';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  // @Input() title: string;
  @Input() article: Article;

  constructor() { }

  ngOnInit(): void {
  }

}
