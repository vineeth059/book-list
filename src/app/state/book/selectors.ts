import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, bookFeatureKey } from './reducer';

const getBookState = createFeatureSelector<State>(
  bookFeatureKey
);

export const selectBookList = createSelector(
  getBookState,
  state => state.books
);

export const selectBookError = createSelector(
  getBookState,
  state => state.error
);

export const selectBookIsLoading = createSelector(
  getBookState,
  state => state.isLoading
);