import {
  Component,
  OnInit,
  ContentChildren,
  QueryList,
  AfterContentInit,
} from '@angular/core';
import { ComponentCComponent } from '../component-c/component-c.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, AfterContentInit {

  // Send output
  @ContentChildren(ComponentCComponent) componentCList: QueryList<ComponentCComponent>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    // Set fullnames of contentChildren
    if (this.componentCList) {
      this.componentCList.forEach((componentC, i) => {
        switch(i) {
          case 0:
            componentC.name = "Wadi";
            componentC.surname = "Foucher";
            break;
          case 1:
            componentC.name = "Soushi";
            componentC.surname = "DanDanDan";
            break;
          case 2:
            componentC.name = "Baptiste";
            componentC.surname = "Barre";
            break;
          default:
            break;
        }
      });
    }
  }
}
