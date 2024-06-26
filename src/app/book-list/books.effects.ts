import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GoogleBooksService } from './books.service';
import { BooksActions, BooksApiActions } from './books.actions';
import { switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class BooksEffects {
  constructor(
    private actions$: Actions,
    private booksService: GoogleBooksService,
  ) {}

  // TODO 1: add effect for fetching books
  searchBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksActions.search),
      switchMap(({ query }) =>
        this.booksService.getBooks(query).pipe(map((books) => BooksApiActions.retrievedBookList({ books }))),
      ),
    ),
  );
}
