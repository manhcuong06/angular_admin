import { Injectable } from '@angular/core';
import { Book } from '../../models/book/book.model';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import param_local = require('../../params/params_local');

@Injectable()
export class BookService {
    api_path = param_local.service_api_domain + 'book';

    constructor(private http: Http) { }

    getHttpbooks(): Promise<Book[]> {
        return this.http.get(this.api_path)
            .toPromise()
            .then((res: Response) => res.json() as Book[]);
    }

    getObservableHttpbooks(): Observable<Book[]> {
        return this.http.get(this.api_path)
            .map((res: Response) => res.json() as Book[]);
    }

    getbook(id: number): Promise<Book> {
        return this.getHttpbooks()
            .then((books: Book[]) => books.find(book => book.id == id));
    }

    addbook(book: any) {
        return this.http.post('http://localhost:81/service_api/test_service_post.php', JSON.stringify(book))
            .map((res: Response) => res.json());
    }
}