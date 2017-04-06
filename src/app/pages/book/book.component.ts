import { Component, OnInit } from '@angular/core';
import params = require('../../params/params');

@Component({
    selector: 'page-book',
    templateUrl: './app/pages/book/book.component.html'
})
export class PageBookComponent implements OnInit {
    constructor() {
        params.title = 'Books';
        params.breadcrumbs = [
            { label: params.title }
        ];
    }

    ngOnInit() { }
}