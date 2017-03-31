import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'page-product',
    templateUrl: './app/pages/product/product.component.html'
})
export class PageProductComponent implements OnInit {
    constructor(private title_service: Title) {
        this.title_service.setTitle('List of Products');
    }

    ngOnInit() { }
}