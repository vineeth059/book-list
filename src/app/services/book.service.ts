import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, delay } from "rxjs/operators";
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private API_BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep";

  constructor(private http: HttpClient) {}

  getBooks(): Observable<any> {
    return this.http.get<any>(`${this.API_BASE_URL}`).pipe(
      delay(100),
      catchError(this.handleError)
    );
  }

  addBook(data: Book) {
    //TODO
  }

  handleError(error: any) {
    let errorMessage = '';
    // Client-side error.
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    // Server-side error.
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
