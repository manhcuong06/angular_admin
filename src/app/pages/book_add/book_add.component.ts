import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'module-book-add',
    templateUrl: './app/pages/book_add/book_add.component.html'
})
export class PageBookAddComponent implements OnInit {
    constructor(private title_service: Title) {
        this.title_service.setTitle('Add book');
    }

    ngOnInit() { }
}