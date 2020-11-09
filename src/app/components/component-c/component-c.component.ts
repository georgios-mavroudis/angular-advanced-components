import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-c',
  templateUrl: './component-c.component.html',
  styleUrls: ['./component-c.component.scss']
})
export class ComponentCComponent implements OnInit {

  public name: string;
  public surname: string;

  constructor() { }

  ngOnInit(): void {
  }

}
