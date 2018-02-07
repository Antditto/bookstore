import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
  private query: string;
  private API_KEY: string = environment.GOODREADS_API_KEY;
  private API_URL: string = environment.GOODREADS_API_URL;
  private URL: string = this.API_URL + this.API_KEY + '&q=';

  constructor(private _http: Http) { }

  getBooks(query) {
    return this._http.get('http://localhost:4200/assets/books.json')
      .map(res => res.json());
  }

}
