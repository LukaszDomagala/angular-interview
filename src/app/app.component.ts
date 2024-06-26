import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { Store } from '@ngrx/store';
import { selectAvailableBooks } from './book-list/books.selectors';
import { BooksActions } from './book-list/books.actions';
import { CommonModule } from '@angular/common';
import { GoogleBooksService } from './book-list/books.service';
import { Book } from './book-list/books.model';
import { selectCollection } from './book-collection/collections.selectors';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BookListComponent, BookCollectionComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  books$ = this.store.select(selectAvailableBooks);
  bookCollection$ = this.store.select(selectCollection);
  isLoading$ = this.booksService.isLoading$;

  constructor(
    private booksService: GoogleBooksService,
    private store: Store,
  ) {}

  onSearch(query: string) {
    this.store.dispatch(BooksActions.search({ query }));
  }

  onAdd(book: Book) {
    this.store.dispatch(BooksActions.addBook({ book }));
  }

  onRemove(book: Book) {
    this.store.dispatch(BooksActions.removeBook({ book }));
  }

  ngOnInit() {
    // TODO 1: call GoogleBooksService to get list of books
    // TODO 2: change to NgRx Effect (dispatch action instead of using service directly)
    this.store.dispatch(BooksActions.search({ query: 'Harry Potter' }));
  }
}
