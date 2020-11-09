import {
  Component,
  OnInit,
  AfterContentInit,
  ContentChild,
} from '@angular/core';

import { NgContentChildComponent } from '../ng-content-child/ng-content-child.component';
import { Patient } from 'src/app/models/patient.model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, AfterContentInit {
  // subscribe to an ngContentChild output
  @ContentChild(NgContentChildComponent) checkBox: NgContentChildComponent;

  public showMessage: boolean;

  public patients: Patient[];

  constructor() { }

  ngOnInit() {

  }

  ngAfterContentInit() {
    // subscribe to the ngContent child
    this.checkBox.checked.subscribe((event: boolean) => {
      this.showMessage = event;
    });
  }

}
