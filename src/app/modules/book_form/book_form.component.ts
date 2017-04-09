import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Book } from '../../models/book/book.model';
import { BookService } from '../../services/book/book.service';
import { DatePipe } from '@angular/common';
import params = require('../../params/params');
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'module-book-form',
    templateUrl: './app/modules/book_form/book_form.component.html',
    providers: [ DatePipe ],
})
export class ModBookFormComponent implements OnInit {
    book: Book = new Book(null, null, null, null, null, null, null, null, null, null, null, null, 1, null, null, null, 0);
    file : File;
    selectedValues = { };

    constructor(private route: ActivatedRoute, private router: Router, private book_service: BookService, private datePipe: DatePipe) {
        this.book_service.reset();
        this.route.params
            .switchMap((params: Params) => this.book_service.getBookForForm(params['id']))
            .subscribe((book: Book) => {
                // Update
                if (book.id) {
                    params.title = `Update Book: ${book.ten_sach}`;
                    params.breadcrumbs = [
                        { label: 'Books', url: '/book' },
                        { label: book.ten_sach, url: `/book/view/${book.id}` },
                        { label: 'Update' }
                    ];
                    setTimeout(() => {
                        this.selectedValues = {
                            category  : `${book.id_loai_sach}`,
                            publisher : `${book.id_nha_xuat_ban}`,
                            writer    : `${book.id_tac_gia}`,
                        }
                    }, 0);
                    this.book = book;
                }
            })
        ;
    }

    ngOnInit() { }

    selectOnChange(property: string, value: number = null) {
        this.book[property] = value;
    }

    fileOnChange(event: any) {
        this.file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
        this.book.hinh = this.file.name;
    }

    onSubmit() {
        this.book.ngay_xuat_ban = this.datePipe.transform(this.book.ngay_xuat_ban, 'yyyy-MM-dd');
        this.book.trang_thai    = this.book.trang_thai ? 1 : 0;
        this.book.noi_bat       = this.book.noi_bat    ? 1 : 0;

        this.book_service.postBook(this.book, this.file)
            .toPromise()
            .then(res => {
                if (res.id) {
                    this.router.navigate([`/book/view/${res.id}`]);
                } else {
                    alert('An error occurs.');
                }
                console.log(res);
            })
        ;
    }
}