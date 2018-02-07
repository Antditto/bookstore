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

  openSnackBar(book, message) {
    this.snackBar.open(book.title, message, {
      duration: 2000,
    });
  }

  addedToCart(book) {
    book.added = true;
    this.added = true;
    let a = [];
    let current = JSON.parse(localStorage.getItem('cart'));
    a.push(book);
    if (!JSON.parse(localStorage.getItem('cart'))) {
      a.push(JSON.parse(localStorage.getItem('cart')))
    }
    a = a.concat(current);
    localStorage.setItem('cart', JSON.stringify(a));
    this.openSnackBar(book, 'Added to Cart');
  }

  constructor(
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    setTimeout( () => {
      this.snackBar.open('Drag a book to the cart', 'it will be added for you!', {
        duration: 4000,
      });
    }, 1000);
  }

}
