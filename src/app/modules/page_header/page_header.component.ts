import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'module-page-header',
    templateUrl: './app/modules/page_header/page_header.component.html'
})
export class ModPageHeaderComponent implements OnInit {
    params = require('../../params/params');

    constructor(private title_service: Title) {
        setTimeout(() => this.title_service.setTitle(this.params.title), 200);
    }

    ngOnInit() { }
}