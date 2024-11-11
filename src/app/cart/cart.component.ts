import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart: { book: any, quantity: number }[] = [];
  total: number = 0;
  checkoutForm: FormGroup;

  constructor(private cartService: CartService, private fb: FormBuilder) {
    this.checkoutForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.total = this.cartService.getTotal();
  }

  removeFromCart(book: Book) {
    this.cartService.removeFromCart(book);
    this.updateCart();
  }

  increaseQuantity(book: any) {
    this.cartService.updateQuantity(book.book, book.quantity + 1);
    this.updateCart();
  }

  decreaseQuantity(book: any) {
    if (book.quantity > 1) { 
      this.cartService.updateQuantity(book.book, book.quantity - 1);
      this.updateCart();
    }
  }

  updateCart() {
    this.cart = this.cartService.getCart();
    this.total = this.cartService.getTotal();
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      const { name, address } = this.checkoutForm.value;
      console.log(`Name: ${name}, Address: ${address}, Total Price: $${this.total}`);
      this.cartService.clearCart();
      this.updateCart();
    }
  }
}