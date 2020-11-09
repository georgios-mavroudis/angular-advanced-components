import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ng-content-child',
  templateUrl: './ng-content-child.component.html',
  styleUrls: ['./ng-content-child.component.scss']
})
export class NgContentChildComponent implements OnInit {

  // public checked: boolean;
  @Output() checked = new EventEmitter<boolean>();

  public manage: string = 'Howdy';
  constructor() { }

  ngOnInit(): void {
  }

  public check(value: boolean) {
    this.checked.emit(value);
  }

}
