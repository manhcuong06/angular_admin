import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'page-book',
    templateUrl: './app/pages/book/book.component.html'
})
export class PageBookComponent implements OnInit {
    constructor(private title_service: Title) {
        this.title_service.setTitle('List of Books');
    }

    ngOnInit() { }
}