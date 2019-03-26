import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSsoperComponent } from './app-ssoper.component';

describe('AppSsoperComponent', () => {
  let component: AppSsoperComponent;
  let fixture: ComponentFixture<AppSsoperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSsoperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSsoperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
