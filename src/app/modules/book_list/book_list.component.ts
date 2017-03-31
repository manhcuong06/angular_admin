import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book/book.model';
import { BookService } from '../../services/book/book.service';
import { OrderByPipe } from '../../app.pipe';

@Component({
    selector: 'module-book-list',
    templateUrl: './app/modules/book_list/book_list.component.html',
})
export class ModBookListComponent implements OnInit {
    columns: any[] = [
        { id: 1, name: 'id', label: 'ID', class: 'order dropup', display: true },
        { id: 2, name: 'ten_sach', label: 'Tên sách', class: '', display: false, },
        { id: 3, name: 'id_tac_gia', label: 'Tác giả', class: '', display: false, },
        { id: 4, name: 'id_loai_sach', label: 'Loại sách', class: '', display: false, },
        { id: 5, name: 'id_nha_xuat_ban', label: 'Nhà xuất bản', class: '', display: false, },
        { id: 6, name: 'trang_thai', label: 'Trạng thái', class: '', display: false, },
        { id: 7, name: 'hinh', label: 'Hình', class: '', display: false, },
        { id: 8, name: 'don_gia', label: 'Đơn giá', class: '', display: false, },
    ];
    original_books: Book[];
    books: Book[] = [];
    order_by: any[] = ['id', 1];

    constructor(private book_service: BookService) {
        // Get Http with Promise
        // this.book_service.getHttpbooks().then(books => this.books = books);

        // Get Http with Obserable
        this.book_service.getObservableHttpbooks().subscribe(books => {
            this.original_books = books;
            this.books = this.original_books;
        });
    }

    ngOnInit() { }

    search(event: any) {
        this.books = this.original_books.filter(book => book.ten_sach.toLowerCase().indexOf(event.target.value) >= 0);
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
        this.books = OrderByPipe.prototype.transform(this.books, this.order_by)
    }
}