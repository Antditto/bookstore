import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css']
})
export class SearchCardComponent implements OnInit {
  @Input() book;
  added = false;

  openSnackBar() {
    this.snackBar.open(this.book.title, 'Added to Cart', {
      duration: 2000,
    });
  }

  addedToCart(book) {
    book.added = true;
    this.added = true;
    let a = [];
    let current = JSON.parse(localStorage.getItem('cart');
    a.push(book);
    if (!JSON.parse(localStorage.getItem('cart'))) {
      a.push(JSON.parse(localStorage.getItem('cart')))
    }
    a = a.concat(current);
    localStorage.setItem('cart', JSON.stringify(a));
    this.openSnackBar();
  }

  constructor(
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

}
