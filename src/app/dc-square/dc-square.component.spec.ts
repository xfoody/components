import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcSquareComponent } from './dc-square.component';

describe('DcSquareComponent', () => {
  let component: DcSquareComponent;
  let fixture: ComponentFixture<DcSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
