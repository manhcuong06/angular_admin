import { Menu } from '../../models/menu/menu.model';

export var MockMenu: Menu[] = [
    {
        id: 1,
        icon: 'home',
        label: 'Home',
        link: '',
        collapse: false,
        child: null,
    },
    {
        id: 2,
        icon: 'mobile-device',
        label: 'Product',
        link: '',
        collapse: false,
        child: [
            {
                id: 21,
                icon: 'table',
                label: 'List Product',
                link: 'product',
                collapse: false,
                child: null
            },
            {
                id: 22,
                icon: 'plus-sign',
                label: 'Add Product',
                link: 'product/add',
                collapse: false,
                child: null
            }
        ],
    },
    {
        id: 3,
        icon: 'male-user',
        label: 'User',
        link: '',
        collapse: false,
        child: [
            {
                id: 31,
                icon: 'table',
                label: 'List User',
                link: 'user',
                collapse: false,
                child: null
            },
            {
                id: 32,
                icon: 'plus-sign',
                label: 'Add User',
                link: 'user/add',
                collapse: false,
                child: null
            }
        ],
    },
    {
        id: 4,
        icon: 'notepad',
        label: 'Book',
        link: '',
        collapse: false,
        child: [
            {
                id: 41,
                icon: 'table',
                label: 'List Book',
                link: 'book',
                collapse: false,
                child: null
            },
            {
                id: 32,
                icon: 'plus-sign',
                label: 'Add Book',
                link: 'book/add',
                collapse: false,
                child: null
            }
        ],
    },
];