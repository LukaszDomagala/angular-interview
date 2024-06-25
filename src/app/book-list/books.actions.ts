import { createActionGroup, props } from '@ngrx/store';
import { Book } from './books.model';

export const BooksActions = createActionGroup({
  source: 'Books',
  events: {
    Search: props<{ query: string }>(),
    'Add Book': props<{ book: Book }>(),
    'Remove Book': props<{ book: Book }>(),
  },
});

export const BooksApiActions = createActionGroup({
  source: 'Books API',
  events: {
    'Retrieved Book List': props<{ books: ReadonlyArray<Book> }>(),
  },
});
