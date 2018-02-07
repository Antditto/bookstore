import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
  private query: string;

  constructor(private _http: Http) { }

  getBooks(query) {
    return this._http.get('../../assets/books.json')
      .map(res => res.json());
  }

}
