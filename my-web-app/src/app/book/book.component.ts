import { Component, Input, EventEmitter, Output } from '@angular/core';
import { BooksService } from '../services/books.service';

@Component({
    selector: 'app-book',
    templateUrl: 'book.component.html',
    styleUrls: ['book.component.css']
})

export class BookComponent {
    @Input() bookTitle: string = '';    
    @Output() bookClicked = new EventEmitter();
    
    constructor(private booksService: BooksService) {

    }

    onClicked() {
        //this.bookClicked.emit();
        this.booksService.deleteBook(this.bookTitle);
    }
}