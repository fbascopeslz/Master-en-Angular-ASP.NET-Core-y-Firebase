import { Component, OnInit, OnDestroy } from '@angular/core';
import { BooksService } from '../services/books.service';
import { Subscription } from "rxjs";

@Component({
    selector: 'app-books',
    templateUrl: 'books.component.html'
})

export class BooksComponent implements OnInit, OnDestroy {
    books: string[] = [];
    private booksSubscription!: Subscription;
    
    constructor(private booksService: BooksService) {

    }

    ngOnDestroy(): void {
        this.booksSubscription.unsubscribe();
    }

    ngOnInit(): void {
        this.books = this.booksService.getBooks();
        this.booksSubscription = this.booksService.booksSubject.subscribe(() => {
            this.books = this.booksService.getBooks();
        });
    }

    deleteBook(book: string) {
        
    }

    saveBook(f: any) {
        if (f.valid) {
            this.booksService.addBook(f.value.bookName);
        }
    }
}