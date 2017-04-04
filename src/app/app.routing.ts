import { Routes, RouterModule } from '@angular/router';

import { PageHomeComponent } from './pages/home/home.component';
import { PageBookComponent } from './pages/book/book.component';
import { PageBookAddComponent } from './pages/book_add/book_add.component';
import { PageBookViewComponent } from './pages/book_view/book_view.component';
import { PageBookUpdateComponent } from './pages/book_update/book_update.component';
import { PageProductComponent } from './pages/product/product.component';
import { PageProductAddComponent } from './pages/product_add/product_add.component';
import { PageProductUpdateComponent } from './pages/product_update/product_update.component';
import { PageUserComponent } from './pages/user/user.component';
import { PageUserAddComponent } from './pages/user_add/user_add.component';
import { PageUserUpdateComponent } from './pages/user_update/user_update.component';

const appRoutes: Routes = [
    {
        path: '',
        component: PageHomeComponent
    },
    {
        path: 'book',
        component: PageBookComponent
    },
    {
        path: 'book/add',
        component: PageBookAddComponent
    },
    {
        path: 'book/view/:id',
        component: PageBookViewComponent
    },
    {
        path: 'book/update/:id',
        component: PageBookUpdateComponent
    },
    {
        path: 'product',
        component: PageProductComponent
    },
    {
        path: 'product/add',
        component: PageProductAddComponent
    },
    {
        path: 'product/update/:id',
        component: PageProductUpdateComponent
    },
    {
        path: 'user',
        component: PageUserComponent
    },
    {
        path: 'user/add',
        component: PageUserAddComponent
    },
    {
        path: 'user/update/:id',
        component: PageUserUpdateComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);