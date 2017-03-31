export class Menu {
    constructor(
        public id: number,
        public icon: string,
        public label: string,
        public link: string,
        public child: Menu[],
    ) { }
}