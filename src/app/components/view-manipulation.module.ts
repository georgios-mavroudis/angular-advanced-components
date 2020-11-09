import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentComponent } from './parent/parent.component';
import { NgContentChildComponent } from './ng-content-child/ng-content-child.component';
import { NgViewChildComponent } from './ng-view-child/ng-view-child.component';
import { ComponentCComponent } from './component-c/component-c.component';

@NgModule({
  declarations: [
    ParentComponent,
    NgContentChildComponent,
    NgViewChildComponent,
    ComponentCComponent,
  ],
  exports: [
    ParentComponent,
    NgContentChildComponent,
    ComponentCComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [/** Services, actions etc */],
})
export class ViewManipulationModule {}
