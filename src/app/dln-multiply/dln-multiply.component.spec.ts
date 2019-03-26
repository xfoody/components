import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlnMultiplyComponent } from './dln-multiply.component';

describe('DlnMultiplyComponent', () => {
  let component: DlnMultiplyComponent;
  let fixture: ComponentFixture<DlnMultiplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlnMultiplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlnMultiplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
