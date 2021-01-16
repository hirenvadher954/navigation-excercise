import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css'],
})
export class ParentComponentComponent implements OnInit {
  
  parentVariable: string = 'Angular';
  childVariable: string = '';
  
  constructor() {}

  ngOnInit(): void {}

  //We are getting this value from child.
  valueFromChild(childValue: string) {
    this.childVariable =
      "This is the Parent component. I received a string " +
      childValue +
      "from the Child component and I capitalize it here " +
      childValue.toUpperCase();
  }
}
