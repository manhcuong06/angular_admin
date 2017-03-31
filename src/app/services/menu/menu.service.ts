import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Menu } from '../../models/menu/menu.model';
import { MockMenu } from '../../mocks/menu/menu.mock';

import 'rxjs/add/operator/map';

@Injectable()
export class MenuService {
    api_path = '';

    constructor(private http: Http) { }

    getMockMenu() {
        return MockMenu;
    }

    getPromiseMenu(): Promise<Menu[]> {
        return Promise.resolve(MockMenu);
    }

    // getHttpMenu() {
    //     return this.http.get(this.api_path).map((res: Response) => res.json());
    // }
}