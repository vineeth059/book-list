import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EffectsModule } from '@ngrx/effects';
import { BookStateModule } from './state/book';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BookService } from './services/book.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    AddBookComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
    BookStateModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
