import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectBooks } from '../book-list/books.selectors';
import { collectionsFeatureKey } from './collections.reducer';
import { Book } from '../book-list/books.model';

export const selectCollection = createFeatureSelector<ReadonlyArray<Book>>(collectionsFeatureKey);

