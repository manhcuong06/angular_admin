import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'module-page-header',
    templateUrl: './app/modules/page_header/page_header.component.html'
})
export class ModPageHeaderComponent implements OnInit {
    params = require('../../params/params');

    constructor(private title_service: Title) {
        let this_poiter = this;
        setTimeout(function() {
            this_poiter.title_service.setTitle(this_poiter.params.title);
        }, 200);
    }

    ngOnInit() { }
}