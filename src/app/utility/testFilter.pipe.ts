import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'testFilter', 
    pure: false
})

export class TestFilterPipe implements PipeTransform {
    transform(value: any, filterStatus: string): any {
    if (filterStatus === '') {
        return value;
    }
        const resultArray = [];
    for (const item of value) {
        if (item.name === filterStatus) {
            resultArray.push(item);
        }
    }
     return resultArray;
 }

}
