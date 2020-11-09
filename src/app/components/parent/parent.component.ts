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
export class ParentComponent implements OnInit, AfterContentInit, AfterViewInit {
  public ctx = {
    $implicit: 'Doctor',
    surname: 'Who',
  };
  // subscribe to an ngContentChild output
  @ContentChild(NgContentChildComponent) checkBox: NgContentChildComponent;

  // Set surname of contentChild
  // @ContentChild(ComponentBComponent) componentB: ComponentBComponent;

  // // Send output
  // @ContentChildren(ComponentCComponent) componentCList: QueryList<ComponentCComponent>;

  // // // Set patient templateRef
  // @ContentChild(TemplateRef) public patient: TemplateRef<Patient>;


  // ViewChild
  @ViewChild(ComponentCComponent) componentC: ComponentCComponent;
  // @ViewChild('ref') componentC: ElementRef<ComponentCComponent>;

  public showMessage: boolean;

  public patients: Patient[];

  constructor(
    private resolver: ComponentFactoryResolver,
    private renderer2: Renderer2,
    private httpClient: HttpClient,
  ) { }

  ngOnInit() {
    this.httpClient.get('../../../assets/data.json')
      .subscribe((data: Patient[]) => {
        this.patients = data;
      });
  }

  public clicked(event: boolean) {
    this.showMessage = event;
  }

  ngAfterContentInit() {
    // subscribe to the ngContent child
    this.checkBox.checked.subscribe((event: boolean) => {
      this.showMessage = event;
    });

    // Set surname of contentChild
    // if (this.componentB) {
    //   this.componentB.name = "Baptiste";
    //   this.componentB.surname = "Barre";
    // }

    // // // Set fullnames of contentChildren

    // if (this.componentCList) {
    //   this.componentCList.forEach((componentC, i) => {
    //     if (!(i % 2)) {
    //       componentC.name = "Wadi";
    //       componentC.surname = "Foucher";
    //     } else {
    //       componentC.name = "Soushi";
    //       componentC.surname = "DanDanDan";
    //     }
    //   });
    // }
    // if (this.componentA) {
    //   if (this.showMessage) {
    //     this.componentA.surname = "Mavroudis";
    //   }
    // }
    // if (this.ngContentChildren) {
    //   this.ngContentChildren.forEach((item) => {
    //     item.checked.subscribe((checked: boolean) => {
    //       this.showMessage = checked;
    //     })
    //   });
    // };

    // if (this.ngViewChild) {
    //   this.ngViewChild.days = 30; // this is data mutation which we always try to avoid
    //   // and you usually do it for just simple web applications.
    //   // So its better to use this only in specific cases if its necessary
    // }

    // const ngViewChildFactory = this.resolver.resolveComponentFactory(NgViewChildComponent);
    // this.component = this.entry.createComponent(ngViewChildFactory);
    // this.component.instance.days = 15;
    // this.component.instance.someInput = 'bye bye';
    // this.component.instance.someOutput.subscribe(() => {
    //   // someFunction()
    // })
    // if (this.ngContentChild) {
    //   this.ngContentChild.checked.subscribe((checked: boolean) => {
    //     this.showMessage = checked;
    //   });
    // }
  }

  // destroyComponent() {
  //   this.component.destroy();
  // }

  ngAfterViewInit() {

    // if (this.componentC) {
    //   this.componentC.surname = "Mavroudis";
    // }
    // Create the template
    // this.vessel.createEmbeddedView(this.tmp, {
    //   $implicit: 'Giorgos',
    //   surname: 'Mavroudis'
    // });

    /////////// Renderer2 //////////////
    // this.renderer2.setAttribute(this.div.nativeElement, 'placeholder', 'hellllo');
    // this.renderer2.addClass(this.div.nativeElement, 'email');
    // this.renderer2.selectRootElement(this.input.nativeElement).focus();

    //////////// elementRef //////////////
    // this.div.nativeElement.setAttribute('placeholder', 'hello');
    // this.div.nativeElement.classList.add('email');

    // this.input.nativeElement.focus();
    // this.input.nativeElement.setAttribute('placeholder', 'howdy')
  }
}
