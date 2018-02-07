import { Component, OnInit, Input, ViewChild, QueryList } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SearchService } from '../../shared/search.service';
import { Ng2SearchPipe } from '../../shared/filter.pipe';
import { SearchCardComponent } from '../search-card/search-card.component';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  @ViewChild('cmp') child: QueryList<SearchPageComponent>;
  queryString;
  search = {
    params: ''
  };
  books: any[];
  booksFound = false;
  showSpinner = false;
  newSearch = true;
  noResults = false;
  counter: number;
  response: any[];

  onSubmit() {
    this.router.navigate(['/search'], { queryParams: this.search }).then(() => {
      this.searchBooks(this.queryString);
    });
  }

  searchBooks(query: string) {
    this.books.length = 0;
    this.counter = 0;
    this.showSpinner = true;
    this.noResults = false;
    this.newSearch = false;
    setTimeout(() => {
      return this.searchService.getBooks(query).subscribe(
        data => this.handleSuccess(data),
        error => this.handleError(error),
        () => this.showSpinner = false
      );
    }, 1000);
  }

  handleSuccess(data) {
    this.booksFound = true;
    this.response = this.searchPipe.transform(data.results, this.queryString);
    if (this.response.length === 0) {
      this.noResults = true;
    } else {
      this.noResults = false;
    }
    this.limitResults();
  }

  limitResults() {
    for (let i = this.counter + 1; i < this.response.length; i++) {
      this.books.push(this.response[i]);
      if (i % 10 == 0) break;
    }
    this.counter += 10;
  }

  handleError(error) {
    console.log(error);
  }

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private searchService: SearchService,
    private searchPipe: Ng2SearchPipe,
  ) {
    this.counter = 0;
    this.books = [];
  }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.search.params = params['params'];
      this.queryString = params['params'];
      if (params['params']) {
        this.searchBooks(this.queryString);
        this.newSearch = false;
      }
    });

  }

}
