import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Book } from '../../models/book/book.model';
import { BookService } from '../../services/book/book.service';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'module-book-form',
    templateUrl: './app/modules/book_form/book_form.component.html'
})
export class ModBookFormComponent implements OnInit {
    book: Book = new Book(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
    is_sent         : boolean = false;
    image_valid     : boolean = true;

    constructor(private route: ActivatedRoute, private router: Router, private book_service: BookService) {
        this.book_service.reset();
        this.route.params
            .switchMap((params: Params) => this.book_service.getBookForForm(params['id']))
            .subscribe((book: Book) => {
                this.book = book.id ? book : this.book;
            })
        ;
    }

    ngOnInit() { }

    onChange(property: any, value: any) {
        this.book[property] = value;
    }

    onSubmit() {
        this.is_sent = true;
        if (this.book.id) {
            this.book_service.updateBook(this.book)
                .toPromise()
                .then(res => this.is_sent = true)
            ;
        } else {
            this.book_service.addBook(this.book)
                .toPromise()
                .then(res => this.is_sent = true)
            ;
        }
    }
}