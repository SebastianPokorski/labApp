import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'testFilter',
    pure: false
})

export class TestFilterPipe implements PipeTransform {
    transform(value: any, filterStatus: string): any {

        const resultArray = [];
        if (filterStatus === '') {
            return value;
        } else {
            for (const item of value) {
                if (item.name.toLocaleLowerCase().indexOf(filterStatus) > -1) {
                    resultArray.push(item);
                    }
            }
}     return resultArray;
 }

}
