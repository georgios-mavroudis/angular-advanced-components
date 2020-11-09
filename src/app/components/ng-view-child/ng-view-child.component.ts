import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ng-view-child',
  template: `
    <div class="container">You will be logged in for {{ days }} {{ someInput }}</div>
  `,
  styleUrls: ['./ng-view-child.component.scss']
})
export class NgViewChildComponent implements OnInit, OnChanges {
  public days: number = 7;
  someInput: string;
  @Output() someOutput = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch(propName) {
          case '1stInput':
            // do your logic
            break;
          case '2ndInput':
            // do your logic
            break;
          default:
            break;
        }
      }
    }
  }

}
