import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentComponent } from './parent/parent.component';
import { NgContentChildComponent } from './ng-content-child/ng-content-child.component';
import { NgViewChildComponent } from './ng-view-child/ng-view-child.component';
import { PatientCardComponent } from './patient-card/patient-card.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ComponentCComponent } from './component-c/component-c.component';
import { ComponentDComponent } from './component-d/component-d.component';
import { ComponentEComponent } from './component-e/component-e.component';

@NgModule({
  declarations: [
    ParentComponent,
    NgContentChildComponent,
    NgViewChildComponent,
    PatientCardComponent,
    ComponentAComponent,
    ComponentBComponent,
    ComponentCComponent,
    ComponentDComponent,
    ComponentEComponent,
  ],
  exports: [
    ParentComponent,
    NgContentChildComponent,
    PatientCardComponent,
    ComponentAComponent,
    ComponentBComponent,
    ComponentCComponent,
    ComponentDComponent,
    ComponentEComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [/** Services, actions etc */],
})
export class ViewManipulationModule {}
