import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrumpipsumComponent } from './trumpipsum.component';

describe('TrumpipsumComponent', () => {
  let component: TrumpipsumComponent;
  let fixture: ComponentFixture<TrumpipsumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrumpipsumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrumpipsumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
