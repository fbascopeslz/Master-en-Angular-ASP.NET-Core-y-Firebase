import { Subject } from "rxjs";

export class BooksService {
    booksSubject = new Subject();

    private books = [
        'Vaxi book', 
        'Arithmetic', 
        'Graphic magazine'
    ];

    getBooks() {
        return [...this.books];
    }

    addBook(bookName: string) {
        this.books.push(bookName);
        this.booksSubject.next(null);
    }

    deleteBook(bookName: string) {
        this.books = this.books.filter(book => book !== bookName);
        this.booksSubject.next(null);
    }
}