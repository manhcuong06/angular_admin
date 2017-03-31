import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'page-home',
    templateUrl: './app/pages/home/home.component.html'
})
export class PageHomeComponent implements OnInit {
    constructor(private title_service: Title) {
        this.title_service.setTitle('Home');
    }

    ngOnInit() { }
}