import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

export interface PagesType {
  title: string;
  snippet: string;
  pageid: number;
  wordcount: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pages: PagesType[] = [];

  constructor(private wikipedia: WikipediaService) {}

  onTerm(term: string) {
    this.wikipedia.search(term).subscribe((res) => {
      this.pages = res;
    });
  }
}
