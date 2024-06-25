import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from './books.model';
import { createWebpackLoggingCallback } from '@angular-devkit/build-angular/src/tools/webpack/utils/stats';

@Injectable({ providedIn: 'root' })
export class GoogleBooksService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Array<Book>> {
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes';
    const searchString = 'oliver sacks';

    let params = new HttpParams().set('orderBy', 'relevance').set('q', searchString);

    return this.http
      .get<{
        items: Book[];
      }>(baseUrl, { params: params })
      .pipe(map((books) => books.items || []));
  }
}
