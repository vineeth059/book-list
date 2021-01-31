import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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

  constructor(private store: Store<BookStoreState.State>) {}

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
  }

  // getBooks() {
  //   this.store.dispatch(new BookStoreActions.LoadBooksRequestAction());

  //   this.store.select(
  //     BookStoreSelectors.selectBookError
  //   ).subscribe(data => {
  //     this.error = data
  //   });
  // }


}
