import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DhSquarerootComponent } from './dh-squareroot.component';

describe('DhSquarerootComponent', () => {
  let component: DhSquarerootComponent;
  let fixture: ComponentFixture<DhSquarerootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhSquarerootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhSquarerootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
