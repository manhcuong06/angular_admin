import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Product } from '../../models/product/product.model';
import { ProductService } from '../../services/product/product.service';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'module-product-form',
    templateUrl: './app/modules/product_form/product_form.component.html'
})
export class ModProductFormComponent implements OnInit {
    product: Product = new Product(null, null, null, null, null);
    is_added: boolean = false;
    is_updated: boolean = false;

    constructor(private route: ActivatedRoute, private router: Router, private product_service: ProductService) {
        this.route.params
            .switchMap((params: Params) => this.product_service.getProduct(params['id']))
            .subscribe((product: Product) => this.product = product ? product : this.product)
        ;
    }

    ngOnInit() { }

    addProduct(form: any) {
        let product = {
            ten_sach: this.product.name,
            gia_bia: this.product.price,
        };
        console.log(form.price);
        // this.product_service.addProduct(product)
        //     .toPromise()
        //     .then(res => this.is_added = true);
    }
}