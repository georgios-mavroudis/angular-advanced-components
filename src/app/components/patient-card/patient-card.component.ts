import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.scss']
})
export class PatientCardComponent implements OnInit {

  @Input() name: string;
  @Input() condition: string;
  @Input() gender: string;
  @Input() age: number;
  @Input() id: number;
  @Input() lastAppointment: number;

  constructor() { }

  ngOnInit(): void {
  }
}
