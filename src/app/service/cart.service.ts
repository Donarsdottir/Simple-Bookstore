import { Injectable } from '@angular/core';
import { Book } from '../book.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: { book: Book, quantity: number }[] = [];

  addToCart(book: Book) {
    const existingItem = this.cart.find(item => item.book.id === book.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cart.push({ book, quantity: 1 });
    }
  }

  removeFromCart(book: Book) {
    const index = this.cart.findIndex(item => item.book.id === book.id);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }

  getCart() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
  }

  updateQuantity(book: Book, quantity: number) {
    const item = this.cart.find(item => item.book.id === book.id);
  if (item && quantity > 0) {  
    item.quantity = quantity;
  }
  }

  getTotal() {
    return this.cart.reduce((total, item) => total + (item.book.price * item.quantity), 0);
  }
}
