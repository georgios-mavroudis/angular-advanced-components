import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgViewChildComponent } from './ng-view-child.component';

describe('NgViewChildComponent', () => {
  let component: NgViewChildComponent;
  let fixture: ComponentFixture<NgViewChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgViewChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
