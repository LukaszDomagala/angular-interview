import { createFeatureSelector } from '@ngrx/store';
import { collectionsFeatureKey } from './collections.reducer';
import { Book } from '../book-list/books.model';

export const selectCollection = createFeatureSelector<ReadonlyArray<Book>>(collectionsFeatureKey);
