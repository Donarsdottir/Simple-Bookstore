import { Component } from '@angular/core';
import { BOOKS } from '../book-data';
import { Book } from '../book.model';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
books: Book[] = BOOKS;

constructor(private router: Router, private cartService: CartService) {}

addToCart(book: Book) {
  this.cartService.addToCart(book);
  console.log(`Added to cart: ${book.title}`);
  alert("Your item has been added to cart!")
  
}

showDetails(book: Book) {
  console.log(`Details for: ${book.title}`);
  
}
}
