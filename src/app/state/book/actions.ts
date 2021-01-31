import { Action } from "@ngrx/store";
import { Book } from "../../models/book";

export enum ActionTypes {
  LOAD_BOOKS_REQUEST = "[Books] Load Request",
  LOAD_BOOKS_FAILURE = "[Books] Load Failure",
  LOAD_BOOKS_SUCCESS = "[Books] Load Success",
}

export class LoadBooksRequestAction implements Action {
  readonly type = ActionTypes.LOAD_BOOKS_REQUEST;
}

export class LoadBooksFailureAction implements Action {
  readonly type = ActionTypes.LOAD_BOOKS_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class LoadBooksSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_BOOKS_SUCCESS;
  constructor(public payload: { books: Book[] }) {}
}

export type Actions =
  | LoadBooksRequestAction
  | LoadBooksFailureAction
  | LoadBooksSuccessAction;
