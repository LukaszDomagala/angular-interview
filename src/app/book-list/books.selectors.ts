import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Book } from './books.model';
import { booksFeatureKey } from './books.reducer';
import { selectCollection } from '../book-collection/collections.selectors';

export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>(booksFeatureKey);

export const selectAvailableBooks = createSelector(selectBooks, selectCollection, (books, collection) => {
  return books.filter(({ id }) => !collection.map((book) => book.id).includes(id));
});
