import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { Store } from '@ngrx/store';

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
  @Output() addBook: EventEmitter<any> = new EventEmitter();
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.bookForm.value);
    this.addBook.emit(this.bookForm.value)
    this.bookForm.reset();
    this.router.navigate(['']);
  }

  back() {
    this.router.navigate(['']);
  }
}
