import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from './books.model';

@Injectable({ providedIn: 'root' })
export class GoogleBooksService {
  constructor(private http: HttpClient) {}

  getBooks(query: string): Observable<Array<Book>> {
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes';

    let params = new HttpParams().set('orderBy', 'relevance').set('q', query);

    return this.http
      .get<{
        items: Book[];
      }>(baseUrl, { params: params })
      .pipe(map((books) => books.items || []));
  }
}
