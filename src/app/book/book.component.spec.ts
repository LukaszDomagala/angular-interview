import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';
import { Book } from '../book-list/books.model';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    component.book = <Book>{
      id: 'id',
      volumeInfo: {
        title: 'Book Title',
        authors: ['Author 1', 'Author 2'],
      },
    };
    fixture.detectChanges();
  });

  it('should have title', () => {
    // TODO: complete unit test
    const debugEl = fixture.debugElement;
    const titleEl = debugEl.nativeElement.querySelector('p[data-test="book-title"]');

    expect(titleEl.innerText).toBe('Book Title');
  });
});
