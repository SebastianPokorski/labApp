import { Injectable } from '@angular/core';

import {Test } from './test.model';

// tslint:disable-next-line:class-name
export class testService {
    private tests: Test[] = [
        new Test('Glukoza', 8, 1),
        new Test('Insulina', 36, 1),
        new Test('free Testosteron', 98, 14),
        new Test('free PSA', 32, 2),
        new Test('PSA', 23, 2),
        new Test('Androstendion', 98, 4)
    ];

    getTests() {
        return this.tests.slice();
    }
}
