import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'module-product-add',
    templateUrl: './app/pages/product_add/product_add.component.html'
})
export class PageProductAddComponent implements OnInit {
    constructor(private title_service: Title) {
        this.title_service.setTitle('Add Product');
    }

    ngOnInit() { }
}