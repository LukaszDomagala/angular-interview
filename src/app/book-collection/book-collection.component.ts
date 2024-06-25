import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../book-list/books.model';
import { CommonModule } from '@angular/common';
import { BookComponent } from '../book/book.component';

@Component({
  standalone: true,
  imports: [CommonModule, BookComponent],
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.scss'],
})
export class BookCollectionComponent {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() remove = new EventEmitter<Book>();
}
