import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'module-user-add',
    templateUrl: './app/pages/user_add/user_add.component.html'
})
export class PageUserAddComponent implements OnInit {
    constructor(private title_service: Title) {
        this.title_service.setTitle('Add User');
    }

    ngOnInit() { }
}