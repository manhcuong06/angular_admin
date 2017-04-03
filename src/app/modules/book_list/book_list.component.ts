import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book/book.model';
import { BookService } from '../../services/book/book.service';
import { OrderByPipe } from '../../app.pipe';
import params = require('../../params/params');

@Component({
    selector: 'module-book-list',
    templateUrl: './app/modules/book_list/book_list.component.html',
})
export class ModBookListComponent implements OnInit {
    columns: any[] = [
        { name: 'id', label: 'ID', class: 'order', display: true, },
        { name: 'ten_sach', label: 'Title', class: '', display: false, },
        { name: 'id_tac_gia', label: 'Writer', class: '', display: false, },
        { name: 'id_loai_sach', label: 'Category', class: '', display: false, },
        { name: 'id_nha_xuat_ban', label: 'Publisher', class: '', display: false, },
        { name: 'trang_thai', label: 'Status', class: '', display: false, },
        { name: 'hinh', label: 'Image', class: '', display: false, },
        { name: 'don_gia', label: 'Selling price', class: '', display: false, },
        { name: 'thao_tac', label: 'Actions', class: '', display: false, },
    ];
    order_by  : any  = params.defaultOrderBy;
    itemsPerPageList = params.itemsPerPageList;
    itemsPerPage     = this.itemsPerPageList[0].id;
    all_books : Book[];
    books     : Book[] = [];

    constructor(private book_service: BookService) {
        // Get Http with Promise
        this.book_service.getHttpbooks()
            .then(books => {
                this.all_books = books;
                this.books     = this.all_books;
            })
        ;

        // Get Http with Obserable
        // this.book_service.getObservableHttpbooks().subscribe(books => {
        //     this.original_books = books;
        //     this.books = this.original_books;
        // });
    }

    ngOnInit() { }

    search(event: any) {
        this.books = this.all_books.filter(book => book.ten_sach.toLowerCase().indexOf(event.target.value) >= 0);
    }

    sortBy(name: string) {
        if (name == 'id' || name == 'ten_sach' || name == 'trang_thai' || name == 'don_gia') {
            let this_pointer = this;
            this.columns.forEach(function(column) {
                if (column.name == name) {
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
            this.books = OrderByPipe.prototype.transform(this.books, this.order_by)
        }
    }

    setItemsPerPage(itemsPerPage: number) {
        this.itemsPerPage = itemsPerPage;
    }
}