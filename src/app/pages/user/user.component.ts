import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'page-user',
    templateUrl: './app/pages/user/user.component.html'
})
export class PageUserComponent implements OnInit {
    constructor(private title_service: Title) {
        this.title_service.setTitle('List of Users');
    }

    ngOnInit() { }
}