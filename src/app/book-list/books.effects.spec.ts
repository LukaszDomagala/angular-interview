import { TestBed } from '@angular/core/testing';
import { BooksEffects } from './books.effects';
import { GoogleBooksService } from './books.service';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { BooksActions, BooksApiActions } from './books.actions';
import { cold, hot } from 'jasmine-marbles';
import SpyObj = jasmine.SpyObj;

describe('BooksEffects', () => {
  let actions$: Observable<Action>;
  let effects: BooksEffects;
  let apiSpy: SpyObj<GoogleBooksService>;

  beforeEach(() => {
    apiSpy = jasmine.createSpyObj<GoogleBooksService>('GoogleBooksService', ['getBooks']);

    TestBed.configureTestingModule({
      providers: [
        BooksEffects,
        provideMockActions(() => actions$),
        {
          provide: GoogleBooksService,
          useValue: apiSpy,
        },
      ],
    });

    effects = TestBed.inject(BooksEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should call GoogleBooksService and return BooksApiActions.retrievedBookList action', () => {
    // TODO: complete unit test
    const action = BooksActions.search({ query: 'Harry Potter' });
    const completion = BooksApiActions.retrievedBookList({ books: [] });

    actions$ = hot('-a', { a: action });
    const response = cold('-r', { r: [] });
    apiSpy.getBooks.and.returnValue(response);

    const expected = cold('--c', { c: completion });

    expect(effects.searchBooks$).toBeObservable(expected);
    expect(apiSpy.getBooks).toHaveBeenCalled();
  });
});
