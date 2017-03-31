import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user/user.model';
import { UserService } from '../../services/user/user.service';
import { OrderByPipe } from '../../app.pipe';

@Component({
    selector: 'module-user-list',
    templateUrl: './app/modules/user_list/user_list.component.html'
})
export class ModUserListComponent implements OnInit {
    columns: any[] = [
        { id: 1, name: 'id', label: 'ID', class: 'order dropup', display: true },
        { id: 2, name: 'name', label: 'Name', class: '', display: false, },
        { id: 3, name: 'birthday', label: 'Birthday', class: '', display: false, },
        { id: 4, name: 'email', label: 'Email', class: '', display: false, },
        { id: 5, name: 'phone', label: 'Phone', class: '', display: false, },
    ];
    users: User[];
    order_by: any[] = ['id', 1];

    constructor(private user_service: UserService) {
        user_service.getPromiseUsers()
            .then(users => this.users = OrderByPipe.prototype.transform(users, this.order_by));
    }

    ngOnInit() { }

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

        this.users = OrderByPipe.prototype.transform(this.users, this.order_by)
    }
}