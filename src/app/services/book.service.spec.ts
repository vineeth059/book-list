import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { Book } from '../models/book';
import { BookService } from './book.service';

describe('BookService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookService]
    });
    service = TestBed.inject(BookService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('getBooks', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      service.getBooks().subscribe(res => {
        expect(res).toEqual;
      });
      const req = httpTestingController.expectOne('https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep');
      expect(req.request.method).toEqual('GET');
      req.flush;
      httpTestingController.verify();
    });
  });
});
