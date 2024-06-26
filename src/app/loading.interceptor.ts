import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { GoogleBooksService } from './book-list/books.service';
import { finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const booksService: GoogleBooksService = inject(GoogleBooksService);
  booksService.isLoading$.next(true);
  return next(req).pipe(finalize(() => booksService.isLoading$.next(false)));
};
