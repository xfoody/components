import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZpcSubtractComponent } from './zpc-subtract.component';

describe('ZpcSubtractComponent', () => {
  let component: ZpcSubtractComponent;
  let fixture: ComponentFixture<ZpcSubtractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZpcSubtractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZpcSubtractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
