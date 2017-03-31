import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Menu } from '../../models/menu/menu.model';
import { MenuService } from '../../services/menu/menu.service';

@Component({
    selector: 'module-menu',
    templateUrl: './app/widgets/menu/menu.component.html'
})
export class ModMenuComponent implements OnInit {
    menu: Menu[];

    constructor(private title_service: Title, private menu_service: MenuService) {
        // Get mock menu
        this.menu = menu_service.getMockMenu();

        // Get Promise menu
        // menu_service.getPromiseMenu()
        //     .then(menu => this.menu = menu);
    }

    ngOnInit() { }
}