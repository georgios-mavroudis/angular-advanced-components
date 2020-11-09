import {
  Component,
  OnInit,
  AfterContentInit,
  ContentChild,
  TemplateRef,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Patient } from 'src/app/models/patient.model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  public ctx = {
    $implicit: 'Doctor',
    surname: 'Who',
  };

  // Set list templateRef
  @ContentChild('pet') public patient: TemplateRef<Patient>;

  // Set single templateRef
  @ContentChild('tempRef') public templateRef: TemplateRef<Patient>;

  public patients: Patient[];

  constructor(
    private httpClient: HttpClient,
  ) { }

  ngOnInit() {
    this.httpClient.get('../../../assets/data.json')
      .subscribe((data: Patient[]) => {
        this.patients = data;
      });
  }
}
