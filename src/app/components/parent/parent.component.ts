import {
  Component,
  OnInit,
  ContentChildren,
  QueryList,
  AfterContentInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
  Renderer2,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ContentChild,
  TemplateRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NgContentChildComponent } from '../ng-content-child/ng-content-child.component';
import { NgViewChildComponent } from '../ng-view-child/ng-view-child.component';
import { Patient } from 'src/app/models/patient.model';
import { PatientCardComponent } from '../patient-card/patient-card.component';
import { ComponentAComponent } from '../component-a/component-a.component';
import { ComponentBComponent } from '../component-b/component-b.component';
import { ComponentCComponent } from '../component-c/component-c.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  public showMessage: boolean;

  constructor() { }

  public clicked(event: boolean) {
    // see the utility of ng-template at each change of showMessage
    this.showMessage = event;
  }
}
