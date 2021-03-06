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
    api_path    = `${params_local.service_api_domain}book/`;
    images_path = `${params_local.service_api_domain}images/sach/`;
    status      = params.status;
    categories  : any;
    publishers  : any;
    writers     : any;

    constructor(private http: Http) { }

    getAllBooks(): Promise<Book[]> {
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

    // getObservableHttpbooks(): Observable<Book[]> {
    //     return this.http.get(this.api_path)
    //         .map((res: Response) => res.json() as Book[])
    //     ;
    // }

    getBook(id: number): Promise<Book> {
        let path = `${this.api_path}view?id=${id}`;
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

    getBookForForm(id: number): Promise<Book> {
        let path = `${this.api_path}info?id=${id}`;
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

    postBook(book: Book, file: File) {
        let path = this.api_path;
        path += (book.id) ? (`update?id=${book.id}`) : 'create';
        let formData: FormData = new FormData();
        formData.append('image', file);
        for (var property in book) {
            formData.append(property, book[property]);
        }
        return this.http.post(path, formData).map((res: Response) => res.json());
    }

    deleteBook(id: number) {
        let path = `${this.api_path}delete?id=${id}`;
        return this.http.post(path, id).map((res: Response) => res.json());
    }

    reset() {
        this.categories = null;
        this.publishers = null;
        this.writers    = null;
    }
}