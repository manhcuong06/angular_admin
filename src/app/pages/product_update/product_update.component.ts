import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'module-product-update',
    templateUrl: './app/pages/product_update/product_update.component.html'
})
export class PageProductUpdateComponent implements OnInit {
    constructor(private title_service: Title) {
        this.title_service.setTitle('Update Product');
    }

    ngOnInit() { }
}