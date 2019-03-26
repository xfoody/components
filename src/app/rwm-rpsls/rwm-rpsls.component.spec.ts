import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RwmRpslsComponent } from './rwm-rpsls.component';

describe('RwmRpslsComponent', () => {
  let component: RwmRpslsComponent;
  let fixture: ComponentFixture<RwmRpslsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RwmRpslsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RwmRpslsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
