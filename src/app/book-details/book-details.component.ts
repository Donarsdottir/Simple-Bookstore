import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { ActivatedRoute } from '@angular/router';
import { BOOKS } from '../book-data';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent implements OnInit{
  book: Book | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const bookId = +this.route.snapshot.paramMap.get('id')!;
    this.book = BOOKS.find(b => b.id === bookId);
  }
}
