import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideState, provideStore } from '@ngrx/store';
import { booksFeature } from './book-list/books.reducer';
import { collectionsFeature } from './book-collection/collections.reducer';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideEffects } from '@ngrx/effects';
import { BooksEffects } from './book-list/books.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimations(),
    provideRouter(routes),
    provideHttpClient(),
    provideStore(),
    provideState(booksFeature),
    provideState(collectionsFeature),
    provideEffects(BooksEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
