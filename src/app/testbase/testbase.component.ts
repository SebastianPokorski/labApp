import { testService } from './../utility/test.service';
import { Test } from './../utility/test.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testbase',
  templateUrl: './testbase.component.html',
  styleUrls: ['./testbase.component.css']
})
export class TestbaseComponent implements OnInit {

  tests: Test[];

  constructor(private testservice: testService) {
  }

  ngOnInit() {
    this.tests = this.testservice.getTests();
  }
}
