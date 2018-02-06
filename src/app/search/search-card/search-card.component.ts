import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css']
})
export class SearchCardComponent implements OnInit {
  @Input() book;
  added = false;

  addedToCart(book) {
    this.added = true;
    let a = [];
    a.push(book);
    console.log(JSON.parse(localStorage.getItem('cart')))
    if (localStorage.getItem('cart')) {
      a.push(JSON.parse(localStorage.getItem('cart')))
    }
    localStorage.setItem('cart', JSON.stringify(a));
    console.log(localStorage.getItem('cart'));
  }

  constructor() { }

  ngOnInit() {
  }

}
