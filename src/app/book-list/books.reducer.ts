import { createFeature, createReducer, on } from '@ngrx/store';

import { BooksApiActions } from './books.actions';
import { Book } from './books.model';

export const booksFeatureKey = 'books';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(BooksApiActions.retrievedBookList, (_state, { books }) => books),
);

export const booksFeature = createFeature({
  name: booksFeatureKey,
  reducer: booksReducer,
});
