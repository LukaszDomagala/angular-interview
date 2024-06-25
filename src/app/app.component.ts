import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { Store } from '@ngrx/store';
import { selectAvailableBooks, selectBooks } from './book-list/books.selectors';
import { BooksActions, BooksApiActions } from './book-list/books.actions';
import { CommonModule } from '@angular/common';
import { GoogleBooksService } from './book-list/books.service';
import { Book } from './book-list/books.model';
import { selectCollection } from './book-collection/collections.selectors';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BookListComponent, BookCollectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  books$ = this.store.select(selectAvailableBooks);
  bookCollection$ = this.store.select(selectCollection);

  constructor(
    private booksService: GoogleBooksService,
    private store: Store,
  ) {}

  onAdd(book: Book) {
    this.store.dispatch(BooksActions.addBook({ book }));
  }

  onRemove(book: Book) {
    this.store.dispatch(BooksActions.removeBook({ book }));
  }

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) => this.store.dispatch(BooksApiActions.retrievedBookList({ books })));
  }
}
