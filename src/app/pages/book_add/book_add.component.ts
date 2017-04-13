import { Component, OnInit } from '@angular/core';
import params = require('../../params/params');

@Component({
    selector: 'module-book-add',
    templateUrl: './app/pages/book_add/book_add.component.html'
})
export class PageBookAddComponent implements OnInit {
    constructor() {
        params.title = 'Add Book';
        params.breadcrumbs = [
            { label: 'Books', url: '/book' },
            { label: params.title }
        ];
    }

    ngOnInit() { }
}