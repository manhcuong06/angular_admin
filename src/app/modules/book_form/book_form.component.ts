import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Book } from '../../models/book/book.model';
import { BookService } from '../../services/book/book.service';
import params = require('../../params/params');
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'module-book-form',
    templateUrl: './app/modules/book_form/book_form.component.html'
})
export class ModBookFormComponent implements OnInit {
    book: Book = new Book(null, null, null, null, null, null, null, null, null, null, null, null, 1, null, null, null, 0);
    file_input: string = '';
    file : File;

    constructor(private route: ActivatedRoute, private router: Router, private book_service: BookService) {
        this.book_service.reset();
        this.route.params
            .switchMap((params: Params) => this.book_service.getBookForForm(params['id']))
            .subscribe((book: Book) => {
                // Update
                if (book.id) {
                    params.title = '' + book.ten_sach;
                    params.breadcrumbs = [
                        { label: 'Books', url: '/book' },
                        { label: params.title, url: '/book/view/' + book.id },
                        { label: 'Update' }
                    ];
                    this.book = book;
                }
            })
        ;
    }

    ngOnInit() { }

    select2OnChange(property: string, value: any) {
        this.book[property] = value;
    }

    fileOnChange(event: EventTarget) {
        let eventObj: MSInputMethodContext = <MSInputMethodContext> event;
        let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
        let files: FileList = target.files;
        this.file = files[0];
        this.book.hinh = this.file.name;

        var reader = new FileReader();
        reader.onload = function() {
            $('#preview-image')
                .attr('src', reader.result)
                .height(200)
            ;
        };
        reader.readAsDataURL(this.file);
    }

    onSubmit() {
        this.book.trang_thai = this.book.trang_thai ? 1 : 0;
        this.book.noi_bat    = this.book.noi_bat    ? 1 : 0;

        this.book_service.postBook(this.book, this.file)
            .toPromise()
            .then(res => {
                if (res.id) {
                    this.router.navigate(['/book/view/' + res.id]);
                } else {
                    alert('An error occurs.');
                }
            })
        ;
    }
}