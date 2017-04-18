import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/primeng';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Book } from '../../models/book/book.model';
import { BookService } from '../../services/book/book.service';
import params = require('../../params/params');
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'module-book-info',
    templateUrl: './app/modules/book_info/book_info.component.html'
})
export class ModBookInfoComponent implements OnInit {
    book: Book;
    constructor(private route: ActivatedRoute, private router: Router, private book_service: BookService, private sanitizer: DomSanitizer, private confirmationService: ConfirmationService) {
        this.book_service.reset();
        this.route.params
            .switchMap((params: Params) => this.book_service.getBook(params['id']))
            .subscribe((book: Book) => {
                this.book = book;
                params.title = this.book.ten_sach;
                params.breadcrumbs = [
                    { label: 'Books', url: '/book' },
                    { label: params.title}
                ];
            })
        ;
    }

    ngOnInit() { }

    confirm() {
        this.confirmationService.confirm({
            header: 'Confirmation',
            icon: 'fa fa-question-circle',
            message: `Are you sure that you want to delete: ${this.book.ten_sach}`,
            accept: () => this.deleteBook()
        });
    }

    deleteBook() {
        this.book_service.deleteBook(this.book.id).toPromise().then(res => this.router.navigate(['/book']));
    }
}