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
    console.log(book);
    this.added = true;
    let a = [];
    a.push(book);
    console.log(a);
    console.log(JSON.parse(localStorage.getItem('cart')))
    if (!JSON.parse(localStorage.getItem('cart'))) {
      a.push(JSON.parse(localStorage.getItem('cart')))
    }
    console.log(a)
    localStorage.setItem('cart', JSON.stringify(a));
    console.log(localStorage.getItem('cart'));
  }

  constructor() { }

  ngOnInit() {
  }

}
