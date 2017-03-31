import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'module-page-header',
    templateUrl: './app/modules/page_header/page_header.component.html'
})
export class ModPageHeaderComponent implements OnInit {
    title: string;

    constructor(private title_service: Title) {
        this.title = this.title_service.getTitle();
    }

    ngOnInit() { }
}