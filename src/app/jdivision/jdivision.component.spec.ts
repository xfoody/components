import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JdivisionComponent } from './jdivision.component';

describe('JdivisionComponent', () => {
  let component: JdivisionComponent;
  let fixture: ComponentFixture<JdivisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JdivisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JdivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
