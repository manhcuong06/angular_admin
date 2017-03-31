import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product/product.model';
import { ProductService } from '../../services/product/product.service';
import { OrderByPipe } from '../../app.pipe';

@Component({
    selector: 'module-product-list',
    templateUrl: './app/modules/product_list/product_list.component.html',
})
export class ModProductListComponent implements OnInit {
    columns: any[] = [
        { id: 1, name: 'id', label: 'ID', class: 'order dropup', display: true },
        { id: 2, name: 'name', label: 'Name', class: '', display: false, },
        { id: 3, name: 'price', label: 'Price', class: '', display: false, },
        { id: 4, name: 'status', label: 'Status', class: '', display: false, },
    ];
    products: Product[];
    order_by: any[] = ['id', 1];

    constructor(private product_service: ProductService) {
        // Get Product with Pipe
        this.product_service.getPromiseProducts()
            .then(products => this.products = OrderByPipe.prototype.transform(products, this.order_by));

        // Get Http with Promise
        // this.product_service.getHttpProducts().then(products => this.products = products);

        // Get Http with Obserable
        // this.product_service.getObservableHttpProducts()
        //     .subscribe(products => this.products = products);
    }

    ngOnInit() { }

    search(event: any) {
        console.log(event);
    }

    sortBy(id: number) {
        let this_pointer = this;
        this.columns.forEach(function(column) {
            if (column.id == id) {
                if (this_pointer.order_by[0] == column.name) {
                    this_pointer.order_by[1] *= -1;
                    column.class = (this_pointer.order_by[1] > 0) ? 'order dropup' : 'order';
                } else {
                    this_pointer.order_by[1] = 1;
                    column.class = 'order dropup';
                }
                column.display = true;
                this_pointer.order_by[0] = column.name;
            } else {
                column.class   = '';
                column.display = false;
            }
        });

        this.products = OrderByPipe.prototype.transform(this.products, this.order_by)
    }
}