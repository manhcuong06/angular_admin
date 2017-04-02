import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'module-book-view',
    templateUrl: './app/pages/book_view/book_view.component.html'
})
export class PageBookViewComponent implements OnInit {
    constructor(private title_service: Title) {
        this.title_service.setTitle('View book');
    }

    ngOnInit() { }
}