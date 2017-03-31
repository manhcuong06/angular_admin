export class User {
    constructor(
        public id: number,
        public name: string,
        public birthday: string,
        public email: string,
        public password: string,
        public phone: string
    ) { }
}