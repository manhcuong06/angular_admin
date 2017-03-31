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
    writers: any[] = [];
    categories: any[] = [];
    is_added: boolean = false;
    is_updated: boolean = false;

    constructor(private route: ActivatedRoute, private router: Router, private book_service: BookService) {
        this.route.params
            .switchMap((params: Params) => this.book_service.getbook(params['id']))
            .subscribe((book: Book) => this.book = book ? book : this.book);

        for (var i=1; i<=32; i++) {
            this.writers.push({id: i, label: 'Tác giả ' + i});
        }
        for (var i=1; i<=92; i++) {
            this.categories.push({id: i, label: 'Loại sách ' + i});
        }
    }

    ngOnInit() { }

    addBook() {
        this.is_added = true
        // this.book_service.addbook(this.book)
        //     .toPromise()
        //     .then(res => this.is_added = true);
    }
}