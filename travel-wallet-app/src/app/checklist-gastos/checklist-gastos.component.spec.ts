import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistGastosComponent } from './checklist-gastos.component';

describe('ChecklistGastosComponent', () => {
  let component: ChecklistGastosComponent;
  let fixture: ComponentFixture<ChecklistGastosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChecklistGastosComponent]
    });
    fixture = TestBed.createComponent(ChecklistGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
