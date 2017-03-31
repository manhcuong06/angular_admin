import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'module-user-update',
    templateUrl: './app/pages/user_update/user_update.component.html'
})
export class PageUserUpdateComponent implements OnInit {
    constructor(private title_service: Title) {
        this.title_service.setTitle('Update User');
    }

    ngOnInit() { }
}