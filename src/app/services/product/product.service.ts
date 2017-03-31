import { Injectable } from '@angular/core';
import { Product } from '../../models/product/product.model';
import { MockProducts } from '../../mocks/product/product.mock';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
    api_path = 'http://localhost:8080';

    constructor(private http: Http) { }

    getMockProducts() {
        return MockProducts;
    }

    getPromiseProducts(): Promise<Product[]> {
        return Promise.resolve(MockProducts);
    }

    getHttpProducts(): Promise<Product[]> {
        return this.http.get(this.api_path)
            .toPromise()
            .then((res: Response) => res.json() as Product[]);
    }

    getObservableHttpProducts(): Observable<Product[]> {
        return this.http.get(this.api_path)
            .map((res: Response) => res.json() as Product[]);
    }

    getProduct(id: number): Promise<Product> {
        return this.getHttpProducts()
            .then((products: Product[]) => products.find(product => product.id == id));
    }

    addProduct(product: any) {
        return this.http.post('http://localhost:81/service_api/test_service_post.php', JSON.stringify(product))
            .map((res: Response) => res.json());
    }
}