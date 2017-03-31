import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'module-book-update',
    templateUrl: './app/pages/book_update/book_update.component.html'
})
export class PageBookUpdateComponent implements OnInit {
    constructor(private title_service: Title) {
        this.title_service.setTitle('Update Book');
    }

    ngOnInit() { }
}