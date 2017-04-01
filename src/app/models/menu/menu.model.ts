export class Menu {
    constructor(
        public id: number,
        public icon: string,
        public label: string,
        public link: string,
        public collapse: boolean,
        public child: Menu[],
    ) { }
}