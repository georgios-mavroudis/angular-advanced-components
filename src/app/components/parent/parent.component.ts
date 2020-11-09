import {
  Component,
  OnInit,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Patient } from 'src/app/models/patient.model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  public showMessage: boolean;
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

  public clicked(event: boolean) {
    this.showMessage = event;
  }
}
