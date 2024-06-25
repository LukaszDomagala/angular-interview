import { Component, Input } from '@angular/core';
import { NgForOf } from '@angular/common';
import { Book } from '../book-list/books.model';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  @Input({ required: true }) book!: Book;
}
