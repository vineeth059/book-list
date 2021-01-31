import { Actions, ActionTypes } from './actions';
import { Book } from '../../models/book';

export interface State {
  books: Book[];
  isLoading: boolean;
  error: string;
}

export const initialState: State = {
  books: [],
  isLoading: false,
  error: ''
};

export const bookFeatureKey = 'books';

export function bookFeatureReducer(state = initialState, action: Actions): State {

  switch (action.type) {
    case ActionTypes.LOAD_BOOKS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null
      };
    }
    case ActionTypes.LOAD_BOOKS_SUCCESS: {
      return {
        books: action.payload.books,
        isLoading: false,
        error: null
      };
    }
    case ActionTypes.LOAD_BOOKS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    }
    default: {
      return state;
    }
  }
}