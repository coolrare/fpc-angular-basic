import { Article } from './../article';
import { Component, Input, OnChanges, OnInit, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, OnChanges, OnDestroy {

  // @Input() title: string;
  @Input() article: Article;

  constructor() { }
  ngOnDestroy(): void {
    console.log('ArticleComponent: ngOnDestroy');
  }


  ngOnInit(): void {
    console.log('ArticleComponent: ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ArticleComponent: ngOnChanages', changes);
  }
}
