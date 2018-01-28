import { testService } from './../utility/test.service';
import { Test } from './../utility/test.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-testbase',
  templateUrl: './testbase.component.html',
  styleUrls: ['./testbase.component.css']
})
export class TestbaseComponent implements OnInit {

  @ViewChild('f') addTestForm: NgForm;
  testindex: number;
  tests: Test[];

  constructor(private testservice: testService) {
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newTest = new Test(value.name, value.prize, value.daysWait);
    this.tests.push(newTest);
    console.log(this.tests);
  }

  // onDelete() {
  //   this.tests.splice(1, 1);
  //   console.log('dzila');
  // }

  ngOnInit() {
    this.tests = this.testservice.getTests();
  }
}
