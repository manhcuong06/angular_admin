import { Component, OnInit } from '@angular/core';
import params = require('../../params/params');

@Component({
    selector: 'page-home',
    templateUrl: './app/pages/home/home.component.html'
})
export class PageHomeComponent implements OnInit {
    constructor() {
        params.title = 'Home';
        params.breadcrumbs = [];
    }

    ngOnInit() { }
}