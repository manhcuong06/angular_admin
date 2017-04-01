import { Injectable } from '@angular/core';
import { Book } from '../../models/book/book.model';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import params_local = require('../../params/params_local');
import params = require('../../params/params');

@Injectable()
export class BookService {
    api_path    = params_local.service_api_domain + 'book/';
    images_path = params_local.service_api_domain + 'images/sach/';
    status      = params.status;
    categories  : any;
    publishers  : any;
    writers     : any;

    constructor(private http: Http) { }

    getHttpbooks(): Promise<Book[]> {
        let path = this.api_path;
        return this.http.get(path)
            .toPromise()
            .then((res: Response) => {
                this.categories = res.json().categories;
                this.publishers = res.json().publishers;
                this.writers    = res.json().writers;
                return res.json().books as Book[];
            })
        ;
    }

    getObservableHttpbooks(): Observable<Book[]> {
        return this.http.get(this.api_path)
            .map((res: Response) => {
                this.categories = res.json().categories;
                this.publishers = res.json().publishers;
                this.writers    = res.json().writers;
                return res.json().books as Book[];
            })
        ;
    }

    getBook(id: number): Promise<Book> {
        let path = this.api_path + 'view?id=' + id;
        return this.http.get(path)
            .toPromise()
            .then((res: Response) => {
                this.categories = res.json().categories;
                this.publishers = res.json().publishers;
                this.writers    = res.json().writers;
                return res.json().book as Book;
            })
        ;
    }

    addBook(book: Book) {
        return this.http.post('http://localhost:81/service_api/test_service_post.php', JSON.stringify(book))
            .map((res: Response) => res.json())
        ;
    }
}