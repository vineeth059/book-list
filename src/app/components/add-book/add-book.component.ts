import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  bookForm = new FormGroup({
    title: new FormControl('', Validators.required),
    authors: new FormControl('', Validators.required),
    publisher: new FormControl('', Validators.required),
    publishedDate: new FormControl('', Validators.required),
  });
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let {title, authors, publisher, publishedDate} = this.bookForm.value;
    authors = authors.split(',')
    const bookAdded: Book = {title, authors, publisher, publishedDate}
    
    this.bookForm.reset();
    this.router.navigateByUrl('', {state: bookAdded});
  }

  back() {
    this.router.navigateByUrl('');
  }
}
