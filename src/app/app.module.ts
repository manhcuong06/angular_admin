import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { Ng2PaginationModule } from 'ng2-pagination';
import { SelectModule } from 'ng-select';
import { Select2Module } from 'ng2-select2';

//PrimeNG Modules
import { CalendarModule, CheckboxModule,
        // EditorModule, SharedModule
} from 'primeng/primeng';

import { AppComponent }  from './app.component';

//Widgets
import { ModNavigationComponent } from './widgets/navigation/navigation.component';
import { ModMenuComponent } from './widgets/menu/menu.component';

//Modules
import { ModPageHeaderComponent } from './modules/page_header/page_header.component';
import { ModBookListComponent } from './modules/book_list/book_list.component';
import { ModBookInfoComponent } from './modules/book_info/book_info.component';
import { ModBookFormComponent } from './modules/book_form/book_form.component';
import { ModProductListComponent } from './modules/product_list/product_list.component';
import { ModProductFormComponent } from './modules/product_form/product_form.component';
import { ModUserListComponent } from './modules/user_list/user_list.component';
import { ModUserFormComponent } from './modules/user_form/user_form.component';

//Pages
import { PageHomeComponent } from './pages/home/home.component';
import { PageBookComponent } from './pages/book/book.component';
import { PageBookViewComponent } from './pages/book_view/book_view.component';
import { PageBookAddComponent } from './pages/book_add/book_add.component';
import { PageBookUpdateComponent } from './pages/book_update/book_update.component';
import { PageProductComponent } from './pages/product/product.component';
import { PageProductAddComponent } from './pages/product_add/product_add.component';
import { PageProductUpdateComponent } from './pages/product_update/product_update.component';
import { PageUserComponent } from './pages/user/user.component';
import { PageUserAddComponent } from './pages/user_add/user_add.component';
import { PageUserUpdateComponent } from './pages/user_update/user_update.component';

//Services
import { MenuService } from './services/menu/menu.service';
import { BookService } from './services/book/book.service';
import { ProductService } from './services/product/product.service';
import { UserService } from './services/user/user.service';

//Routing
import { routing } from './app.routing';

//Pipes
import { OrderByPipe } from './app.pipe';

//File Uploader
import { FileUploaderComponent } from './modules/file_uploader/file_uploader.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, JsonpModule, routing, Ng2PaginationModule, SelectModule, Select2Module,

                  //PrimeNG Modules
                  CalendarModule, CheckboxModule,
                  // EditorModule, SharedModule
                  ],
  declarations: [
    AppComponent,

    //Widgets
    ModNavigationComponent, ModMenuComponent,

    //Modules
    ModPageHeaderComponent,
    ModBookListComponent, ModBookInfoComponent, ModBookFormComponent,
    ModProductListComponent, ModProductFormComponent,
    ModUserListComponent, ModUserFormComponent,

    //Pages
    PageHomeComponent,
    PageBookComponent, PageBookViewComponent, PageBookAddComponent, PageBookUpdateComponent,
    PageProductComponent, PageProductAddComponent, PageProductUpdateComponent,
    PageUserComponent, PageUserAddComponent, PageUserUpdateComponent,

    //File Uploader
    FileUploaderComponent
  ],
  providers: [ MenuService, BookService, ProductService, UserService, OrderByPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
