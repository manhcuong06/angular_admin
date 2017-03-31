import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { User } from '../../models/user/user.model';
import { UserService } from '../../services/user/user.service';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'module-user-form',
    templateUrl: './app/modules/user_form/user_form.component.html'
})
export class ModUserFormComponent implements OnInit {
    user: User = new User(null, null, null, null, null, null);
    is_submitted: boolean = false;

    constructor(private route: ActivatedRoute, private router: Router, private user_service: UserService) {
        this.route.params
            .switchMap((params: Params) => this.user_service.getuser(params['id']))
            .subscribe((user: User) => this.user = user ? user : this.user)
        ;
    }

    ngOnInit() { }

    onSubmit() {
        this.is_submitted = true;
    }
}