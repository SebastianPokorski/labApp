import { testService } from './../utility/test.service';
import { Test } from './../utility/test.model';
import { Component, OnInit, ViewChild, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-testbase',
  templateUrl: './testbase.component.html',
  styleUrls: ['./testbase.component.css']
})
export class TestbaseComponent implements OnInit {

  @ViewChild('f') addTestForm: NgForm;
  tests: Test[];
  index: number;
  filterStatus = '';

  constructor(private testservice: testService) {
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newTest = new Test(value.name, value.prize, value.daysWait);
    this.tests.push(newTest);
    console.log(form);
    form.resetForm();
  }

  onDelete(index: number) {
    this.tests.splice(index, 1);
  }

  ngOnInit() {
    this.tests = this.testservice.getTests();
  }
}
