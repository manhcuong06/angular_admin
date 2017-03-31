export class Book {
    constructor(
        public id: number,
        public ten_sach: string,
        public id_tac_gia: number,
        public gioi_thieu: string,
        public doc_thu: string,
        public id_loai_sach: number,
        public id_nha_xuat_ban: number,
        public so_trang: number,
        public ngay_xuat_bang: string,
        public kich_thuoc: string,
        public sku: string,
        public trong_luong: number,
        public trang_thai: number,
        public hinh: string,
        public don_gia: number,
        public gia_bia: number,
        public noi_bat: boolean,
    ) { }
}