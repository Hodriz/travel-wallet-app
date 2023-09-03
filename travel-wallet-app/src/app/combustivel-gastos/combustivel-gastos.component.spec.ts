import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombustivelGastosComponent } from './combustivel-gastos.component';

describe('CombustivelGastosComponent', () => {
  let component: CombustivelGastosComponent;
  let fixture: ComponentFixture<CombustivelGastosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CombustivelGastosComponent]
    });
    fixture = TestBed.createComponent(CombustivelGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
