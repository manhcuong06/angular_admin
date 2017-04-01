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
    categories  : any;
    publishers  : any;
    writers     : any;
    status      = this.book_service.status;
    images_path = this.book_service.images_path;
    is_added: boolean = false;
    is_updated: boolean = false;

    constructor(private route: ActivatedRoute, private router: Router, private book_service: BookService) {
        this.route.params
            .switchMap((params: Params) => this.book_service.getBook(params['id']))
            .subscribe((book: Book) => {
                this.categories = this.book_service.categories;
                this.publishers = this.book_service.publishers;
                this.writers    = this.book_service.writers;
                this.book       = book ? book : this.book;
            })
        ;
    }

    ngOnInit() { }

    checkSelect(event: any) {
        // console.log(event);
    }

    addBook() {
        this.is_added = true
        // this.book_service.addBook(this.book)
        //     .toPromise()
        //     .then(res => this.is_added = true);
    }
}