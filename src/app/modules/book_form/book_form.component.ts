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
    file_input: string = '';
    file    : File;
    is_sent : boolean = false;

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

    select2OnChange(property: any, value: any) {
        this.book[property] = value;
    }

    fileOnChange(event: EventTarget) {
        let eventObj: MSInputMethodContext = <MSInputMethodContext> event;
        let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
        let files: FileList = target.files;
        this.file = files[0];
        this.book.hinh = this.file.name;

        var reader = new FileReader();
        reader.onload = function (e) {
            $('#preview-image')
                .attr('src', reader.result)
                .height(200)
            ;
        };
        reader.readAsDataURL(this.file);
    }

    onSubmit() {
        // Upload Image
        if (this.file) {
            // this.book_service.uploadFile(this.file).toPromise().then(res => res);
            // console.log(this.book);
            // console.log('Upload Image');
        }

        if (!this.book.id) {
            // Add Book
            this.book_service.addBook(this.book, this.file).toPromise().then(res => res);
            console.log('Add');
        } else {
            // Update Book
            // this.book_service.updateBook(this.book).toPromise().then(res => res);
            console.log('Update');
        }
        this.is_sent = true;
    }
}