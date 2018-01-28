import { Injectable } from '@angular/core';

import {Test } from './test.model';

export class testService {
    private tests: Test[] = [
        new Test(
            'Glukoza',
            8,
            1
        ),
        new Test(
            'Insulina',
            36,
            1
        ),
        new Test(
            'free Testosteron',
            98,
            14
        )

    ];

    getTests() {
        return this.tests.slice();
    }
}
