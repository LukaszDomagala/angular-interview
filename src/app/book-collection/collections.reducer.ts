import { createFeature, createReducer, on } from '@ngrx/store';
import { BooksActions } from '../book-list/books.actions';
import { Book } from '../book-list/books.model';

export const collectionsFeatureKey = 'collections';

export const initialState: ReadonlyArray<Book> = [];

export const collectionsReducer = createReducer(
  initialState,
  on(BooksActions.removeBook, (state, { book }) => state.filter(({ id }) => id !== book.id)),
  on(BooksActions.addBook, (state,  {book}) => {
    if (state.indexOf(book) > -1) return state;

    return [...state, book];
  }),
);

export const collectionsFeature = createFeature({
  name: collectionsFeatureKey,
  reducer: collectionsReducer,
});
