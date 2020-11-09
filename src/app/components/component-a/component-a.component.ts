import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss']
})
export class ComponentAComponent implements OnInit {

  public name: string = "Giorgos";
  @Input() public surname: string;
  constructor() { }

  ngOnInit(): void {
  }


}
