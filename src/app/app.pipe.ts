import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'orderBy'
})

export class OrderByPipe implements PipeTransform {
    transform(array: any[], args: any[]): any[] {
        let property = args[0];
        let operator = args[1];

        array.sort((a: any, b: any) => {
            if (a[property] < b[property]) {
                return -1 * operator;
            } else if (a[property] > b[property]) {
                return 1 * operator;
            } else {
                return 0;
            }
        });
        return array;
    }
}