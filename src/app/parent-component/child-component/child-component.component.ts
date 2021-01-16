import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
})
export class ChildComponentComponent implements OnInit {
  
  @Input() valueFromParent: string = '';
  @Output() valueGoesToParent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  //Emitting Value to Parent Component
  emitValue() {
    this.valueGoesToParent.emit(
      "Neo"
    );
  }
}
