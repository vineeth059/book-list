import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from 'src/app/models/book';
import { BookStoreActions, BookStoreSelectors, BookStoreState } from 'src/app/state/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  error: string;
  isLoading$: Observable<boolean>;
  books: Observable<Book[]>;
  filteredBooks: Observable<Book[]>
  noRecords: boolean = false
  newBookList: Observable<Book[]>

  constructor(private store: Store<BookStoreState.State>) { }

  ngOnInit(): void {
    this.books = this.store.select(
      BookStoreSelectors.selectBookList
    );

    this.store.select(
      BookStoreSelectors.selectBookError
    ).subscribe(data => {
      this.error = data
    });

    this.isLoading$ = this.store.select(
      BookStoreSelectors.selectBookIsLoading
    );
    this.store.dispatch(new BookStoreActions.LoadBooksRequestAction());
    this.filteredBooks = this.books;
    if (history.state) {
      let { title, authors, publisher, publishedDate } = history.state;
      if (title && authors && publisher && publishedDate) {
        authors = authors.toString().split(',')
        const bookAdded: Book = { title, authors, publisher, publishedDate }
        this.filteredBooks = this.books
          .pipe(
            map((books: Book[]) => {
              return books.concat(bookAdded)
            })
          )
      }
    }
  }

  search(value: string) {
    if (value) {
      this.filteredBooks = this.filteredBooks
        .pipe(
          map((books: Book[]) => {
            return books.filter((book: Book) => {
              let isValidSearch = false
              if (book.title.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                isValidSearch = true
              }
              if (book.publisher && book.publisher.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                isValidSearch = true
              }
              book.authors.forEach(author => {
                if (author.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                  isValidSearch = true
                }
              })
              return isValidSearch
            })
          })
        )

      this.filteredBooks.subscribe(res => {
        if (!res.length) {
          this.noRecords = true
        }
      });
    } else {
      this.filteredBooks = this.books;
    }
  }


}
