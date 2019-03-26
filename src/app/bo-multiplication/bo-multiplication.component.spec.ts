import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoMultiplicationComponent } from './bo-multiplication.component';

describe('BoMultiplicationComponent', () => {
  let component: BoMultiplicationComponent;
  let fixture: ComponentFixture<BoMultiplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoMultiplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoMultiplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
