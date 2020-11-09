import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentComponent } from './parent/parent.component';
import { NgContentChildComponent } from './ng-content-child/ng-content-child.component';
import { PatientCardComponent } from './patient-card/patient-card.component';

@NgModule({
  declarations: [
    ParentComponent,
    NgContentChildComponent,
    PatientCardComponent,
  ],
  exports: [
    ParentComponent,
    NgContentChildComponent,
    PatientCardComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [/** Services, actions etc */],
})
export class ViewManipulationModule {}
