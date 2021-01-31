import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of as observableOf } from "rxjs";
import { catchError, map, startWith, mergeMap } from "rxjs/operators";
import { Book } from "src/app/models/book";
import { BookService } from "../../services/book.service";
import * as featureActions from "./actions";

@Injectable()
export class BookStoreEffects {
  constructor(
    private bookService: BookService,
    private actions$: Actions
  ) {}

  @Effect()
  loadRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.LoadBooksRequestAction>(
      featureActions.ActionTypes.LOAD_BOOKS_REQUEST
    ),
    startWith(new featureActions.LoadBooksRequestAction()),
    mergeMap(action =>
      this.bookService.getBooks().pipe(
        map(
          books =>{
            books = books.items.map(book => {
              let bookItem: Book = book.volumeInfo
              return bookItem
            })
            return new featureActions.LoadBooksSuccessAction({
              books
            })
          }
           
        ),
        catchError(error =>
          observableOf(new featureActions.LoadBooksFailureAction({ error }))
        )
      )
    )
  );
}
