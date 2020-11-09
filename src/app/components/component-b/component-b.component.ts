import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.scss']
})
export class ComponentBComponent implements OnInit {

  @Input() name: string;
  @Input() surname: string;

  constructor() { }

  ngOnInit(): void {
  }

}
