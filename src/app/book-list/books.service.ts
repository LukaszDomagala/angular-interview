import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from './books.model';
import { BOOKS_MOCK } from './books-mock';

@Injectable({ providedIn: 'root' })
export class GoogleBooksService {
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  // TODO 1: complete implementation of getBooks()
  // TODO 2: set query parameters orderBy = "relevance" and q = "Harry Potter"
  // TODO 3: dynamically change q parameter based on method parameter, default value = "Harry Potter"
  getBooks(query: string): Observable<Array<Book>> {
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes';

    let params = new HttpParams().set('orderBy', 'relevance').set('q', query);

    return this.http
      .get<{
        items: Book[];
      }>(baseUrl, { params: params })
      .pipe(map((books) => books.items || []));
  }

  getMockBooks(): Observable<Array<Book>> {
    return of(BOOKS_MOCK);
  }
}
