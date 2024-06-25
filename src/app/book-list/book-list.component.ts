import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from './books.model';
import { CommonModule } from '@angular/common';
import { BookComponent } from '../book/book.component';

@Component({
  standalone: true,
  imports: [CommonModule, BookComponent],
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() add = new EventEmitter<Book>();
}
